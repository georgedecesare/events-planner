'use client';

export default function Email() {
  return (
    <TextInput
      placeholder="email@domain.com"
      onChangeAction={(value) => console.log(value)}
    />
  );
}

function TextInput({
  type = 'text',
  placeholder,
  onChangeAction,
}: {
  type?: string;
  placeholder?: string;
  onChangeAction: (value: string) => void;
}) {
  return (
    <div className="mb-4 flex flex-col">
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChangeAction(e.target.value)}
        className="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500
          focus:outline-none mt-5"
      />
    </div>
  );
}
