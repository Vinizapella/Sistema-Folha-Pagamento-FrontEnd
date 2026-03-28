function InputField({ label, placeholder, type = "text" }) {

  return (

    <div className="flex flex-col gap-1">

      <label className="text-sm font-medium text-gray-700">

        {label}

      </label>

      <input

        type={type}

        placeholder={placeholder}

        className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"

      />

    </div>

  )
  
}

export default InputField