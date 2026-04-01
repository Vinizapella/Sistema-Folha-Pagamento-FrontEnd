  function StatCard({ icon, label, value }) {

    return (

      <div className="bg-white rounded-xl p-3 flex items-center gap-5 border-2">

        <div className="text-blue-500 text-2xl ml-3">

          {icon}

        </div>

        <div>

          <p className="text-sm text-gray-500">{label}</p>

          <p className="text-lg font-semibold text-gray-800">{value}</p>

        </div>

      </div>

    )

  }

  export default StatCard