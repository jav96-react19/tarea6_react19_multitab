import PropTypes from "prop-types"

export const MultiFrameworkButtons = (props) => {
  const {setChangeLogo} = props;
  
  return (
    <div className="mt-4 grid grid-cols-4 gap-4 place-items-center w-[500px] mx-auto mobile:w-full mobile:grid-cols-2">
      <button onClick={() => setChangeLogo("react")} className="mt-8 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-500 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
          React
      </button>
      <button onClick={() => setChangeLogo("angular")} className="mt-8 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-500 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
          Angular
      </button>
      <button onClick={() => setChangeLogo("vue")} className="mt-8 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-500 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
          Vue
      </button>
      <button onClick={() => setChangeLogo("php")} className="mt-8 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-500 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
          PHP
      </button>
    </div>
  )
}
MultiFrameworkButtons.propTypes = {
  setChangeLogo: PropTypes.func.isRequired,
};
