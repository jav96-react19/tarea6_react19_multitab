import decreaseView from "@/utils/handleFormView/decreaseView.jsx";
import backFirstView from "@/utils/handleFormView/backFirstView.jsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PropTypes from "prop-types";
import FormSteps from "@/constants/FormSteps.jsx";

const StepButtons = (props) => 
{
  const {FormView, setFormView, reset} = props;
  const { lastStep } = FormSteps;
  
    return (
      <div className="flex justify-between w-full max-w-md mx-auto mt-4 gap-4">
            {FormView === lastStep ? (
                  <button
                      className="flex justify-center items-center mt-16 w-full select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black/20 transition-all hover:shadow-lg hover:shadow-black/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      onClick={() => backFirstView(reset, setFormView)}>
                      Volver al formulario
                  </button>
              ):(
                <>
                  <button
                        className="flex justify-center items-center mt-16 w-full select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black/20 transition-all hover:shadow-lg hover:shadow-black/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                        disabled={FormView === 1}
                        onClick={() => decreaseView(setFormView)}
                  >
                  <ArrowLeft className="mr-2 h-4 w-4" />Anterior
                </button>

                <button
                    className="flex justify-center items-center mt-16 w-full select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black/20 transition-all hover:shadow-lg hover:shadow-black/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="submit"
                  >
                    {FormView === 1 ? "Siguiente": "Envia tus datos"} <ArrowRight className="ml-2 h-4 w-4" />
                </button>                
                </>
              )
            }
                 
      </div>
      )
}

StepButtons.propTypes = {
  FormView: PropTypes.number.isRequired,
  setFormView: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
}
export default StepButtons;