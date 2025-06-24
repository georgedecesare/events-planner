'use client';

export default function TextInput({
  type = "text",
  placeholder,
  onChangeAction,
}: {
  type?: string;
  placeholder?: string;
  onChangeAction: (value: string) => void;
}) {
  return (
    <div className="flex flex-col mb-4">
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChangeAction(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}