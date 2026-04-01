function InputField({ label, id, type = "text", ...props }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className="text-sm font-semibold text-gray-800">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="w-full h-12 bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400 text-gray-700"
        {...props}
      />
    </div>
  )
}
export default InputField