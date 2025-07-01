import { EmailProviderSendVerificationRequestParams } from 'next-auth/providers';
import type { Theme } from '@auth/core/types';

export default async function sendVerificationRequest(
  params: EmailProviderSendVerificationRequestParams
) {
  const { identifier: to, provider, url, theme } = params;
  const { host } = new URL(url);
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${provider.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: provider.from,
      to,
      subject: `Sign in to ${host}`,
      html: html({ url, host, theme }),
      text: text({ url, host }),
    }),
  });

  if (!res.ok)
    throw new Error('Resend error: ' + JSON.stringify(await res.json()));
}

function text(params: { url: string; host: string }) {
  const { url, host } = params;
  return `Sign in to ${host}\n${url}\n\nIf you did not request this email you can safely ignore it.`;
}

function html(params: { url: string; host: string; theme: Theme }) {
  const { url } = params;

  return `
<body style="background: black; color: white">
  <table
    width="100%"
    border="0"
    cellspacing="20"
    cellpadding="0"
    style="
      background: rgb(31, 31, 31);
      max-width: 600px;
      margin: auto;
      border-radius: 10px;
    "
  >
    <tr>
      <td
        align="center"
        style="
          padding: 10px 0px;
          font-size: 22px;
          font-family: Helvetica, Arial, sans-serif;
          color: white;
        "
      >
        Sign in to the <strong>events planner</strong> site.
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px" bgcolor="#d48439">
              <a
                href="${url}"
                target="_blank"
                style="
                  font-size: 18px;
                  font-family: Helvetica, Arial, sans-serif;
                  color: white;
                  text-decoration: none;
                  border-radius: 5px;
                  padding: 10px 20px;
                  display: inline-block;
                  font-weight: bold;
                "
                >Sign in</a
              >
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td
        align="center"
        style="
          padding: 0px 0px 10px 0px;
          font-size: 16px;
          line-height: 22px;
          font-family: Helvetica, Arial, sans-serif;
          color: white;
        "
      >
        This verification link will expire in 24 hours.
      </td>
    </tr>
    <tr>
      <td
        align="center"
        style="
          padding: 0px 0px 10px 0px;
          font-size: 16px;
          line-height: 22px;
          font-family: Helvetica, Arial, sans-serif;
          color: #828282;
        "
      >
        If you did not request this email you can safely ignore it.
      </td>
    </tr>
  </table>
</body>

`;
}
