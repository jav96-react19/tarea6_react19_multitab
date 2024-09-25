import { Steps } from "@/models/Steps.jsx";
import PropTypes from "prop-types";


const StepNumbers = (props) => 
{
    return (
        <>
          <div className="flex justify-between w-[270px] mx-auto mb-4 mobile:w-full">
            {Steps.map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    step === props.formView ? 'bg-gray-200 text-gray-600' : 'bg-black text-white'
                  }`}
                >
                  {step}
                </div>
                <div className="mt-2 text-sm text-gray-600">{step}</div>
              </div>
            ))}
          </div>
        </>
    )
}

StepNumbers.propTypes = {
  formView: PropTypes.number.isRequired,
}

export default StepNumbers;
