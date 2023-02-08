export default function DashboardLabel(props) {
  const { title, placeholder, type } = props;
  const inputType = type || "text";
  return (
    <label class="block">
      <span class="text-gray-600">{title}</span>
      <input
        type={inputType}
        class="
                    mt-1
                    mb-4
                    block
                    w-full
                    rounded-md
                    bg-gray-200
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
        placeholder={placeholder}
      />
    </label>
  );
}
