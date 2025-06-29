# Environment Variables for .env.production

This file lists all the environment variables that should be included in your `.env.production` file for the stefan-events application.

## Required Environment Variables

### Database Configuration

- `DATABASE_URL` - PostgreSQL database connection string for production
  - Format: `postgresql://username:password@host:port/database_name`
  - Example: `postgresql://user:password@localhost:5432/stefan_events_prod`

### NextAuth Configuration

- `AUTH_SECRET` - Secret key for NextAuth.js session encryption
  - Generate with: `openssl rand -base64 32`
  - Must be a secure random string

- `NEXTAUTH_URL` - Canonical URL of your site for NextAuth.js
  - Example: `https://your-domain.com`
  - Important for OAuth redirects and callbacks
  - Required in production for proper OAuth flow

### Google OAuth Configuration

- `AUTH_GOOGLE_ID` - Google OAuth client ID
  - Obtain from Google Cloud Console
  - Used by NextAuth configuration

- `AUTH_GOOGLE_SECRET` - Google OAuth client secret
  - Obtain from Google Cloud Console
  - Used by NextAuth configuration

### Next.js Configuration

- `NODE_ENV` - Environment mode
  - Value: `production`

- `NEXTAUTH_URL` - Base URL for NextAuth callbacks
  - Same as the canonical URL above
  - Required for proper OAuth redirects
  - Must match the domain where your app is hosted

## Optional Environment Variables

### Performance & Monitoring

- `VERCEL_URL` - Automatically set by Vercel (if deploying to Vercel)
- `PORT` - Port number for the application (default: 3000)

### Database Connection Pool (for high traffic)

- `DATABASE_POOL_SIZE` - Maximum number of database connections
- `DATABASE_TIMEOUT` - Database connection timeout in milliseconds

## Security Notes

1. **Never commit these values to version control**
2. **Use strong, unique values for secrets**
3. **Rotate secrets regularly, especially AUTH_SECRET**
4. **Ensure DATABASE_URL uses SSL in production**
5. **Double-check Google OAuth URLs match your production domain**

## Example .env.production Template

```bash
# Database
DATABASE_URL="postgresql://username:password@host:port/database_name"

# NextAuth
AUTH_SECRET="your-generated-secret-here"
NEXTAUTH_URL="https://your-domain.com"

# Google OAuth
AUTH_GOOGLE_ID="your-google-client-id"
AUTH_GOOGLE_SECRET="your-google-client-secret"

# Environment
NODE_ENV="production"
```

## Deployment Notes for GitHub Actions

Your current GitHub Actions workflow copies environment variables using:

```bash
for secret in $(env); do
  echo "Writing environment variable $secret"
  echo "$secret=${!secret}" >> .env.production
done
```

Make sure to add all the above variables as **GitHub Secrets** in your repository settings under:
Settings → Secrets and variables → Actions → Repository secrets

Each variable should be added with the exact name listed above (e.g., `DATABASE_URL`, `AUTH_SECRET`, etc.).
