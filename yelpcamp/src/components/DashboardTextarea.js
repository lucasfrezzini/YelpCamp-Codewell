export default function DashboardTextarea(props) {
  const { title, placeholder } = props;
  return (
    <label className="block">
      <p className="text-gray-600 text-lg mb-2">{title}</p>
      <textarea
        className="
            mt-1
            block
            w-full
            mb-4
            rounded-md
            bg-gray-200
            border-transparent
            focus:border-gray-500 
            focus:bg-white focus:ring-0
                  "
        rows="6"
        placeholder={placeholder}
      ></textarea>
    </label>
  );
}
