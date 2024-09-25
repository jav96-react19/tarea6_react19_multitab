import PropTypes from "prop-types";

const SuccessfulTab = (props) => 
{
    const {name, email, feedback, rating} = props.formData;

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 my-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Datos</h2>
                <div className="mb-4">
                    <strong className="block text-gray-700">Nombre:</strong>
                    <span className="text-gray-900">{name}</span>
                </div>
                <div className="mb-4">
                    <strong className="block text-gray-700">Correo:</strong>
                    <span className="text-gray-900">{email}</span>
                </div>
                <strong className="block text-gray-700 mb-2">Tú Comentario:</strong>
                    <p className="bg-gray-100 p-4 rounded-md border border-gray-200 text-gray-800">
                      {feedback}
                    </p>

                <div className="mt-4">
                    <strong className="block text-gray-700">Valoración:</strong>
                    <p className="text-gray-900">{rating}</p>
                </div>
          </div>
    )
}

SuccessfulTab.propTypes = {
    formData: PropTypes.object.isRequired,
}
export default SuccessfulTab;