import useFormData from "@/hooks/FormData/useFormData.jsx";
import { MessageNotification } from "@/utils/MessageNotification/MessageNotification.jsx";
import { useForm } from "react-hook-form";
import { Toaster} from "sonner";
import useFormView from "@/hooks/FormView/useFormView.jsx";
import PersonalDataTab from "@/components/FormTabs/FirstTab/PersonalDataTab.jsx";
import RatingTab from "@/components/FormTabs/SecondTab/RatingTab.jsx";
import SuccessfulTab from "@/components/FormTabs/SuccessfulTab/SuccessfulTab.jsx";
import increaseView from "@/utils/handleFormView/increaseView.jsx";
import StepButtons from "@/components/FormTabs/StepNavigation/StepButtons.jsx";
import FormSteps from "@/constants/FormSteps.jsx";
import StepNumbers from "@/components/FormTabs/StepNavigation/StepNumbers.jsx";

const Form = () => 
{ 
  const {success, error} = MessageNotification();
  const {FormView, setFormView} = useFormView();
  const {firstStep, secondStep, lastStep} = FormSteps;

  const {
    register, 
    handleSubmit,
    formState: { errors, isValid, isSubmitSuccessful },
    reset,
  } = useForm();

  const {FormData, setFormData} = useFormData();
  
  const SubmitForm = (data) => {
    //Método de useForm que comprueba que el formulario no tenga errores en el momento que se este enviando
    //y en caso afirmativo almacena los datos para mostrarlos en el DOM y pasa a la siguiente vista
    if(isValid)
    {      
      setFormData(data);
      increaseView(setFormView);
    }
  }
  if(isSubmitSuccessful && FormView === lastStep)
  {
    success();      
  }

  const SubmitError = () => error();

    return ( 
        <div className="p-12 relative flex flex-col rounded-xl bg-transparent bg-clip-border shadow-none">
          <form onSubmit={handleSubmit(SubmitForm, SubmitError)} className="mx-auto w-80 max-w-screen-lg mobile:w-full">
              <StepNumbers formView={FormView}/>

              <h4 className="mb-8 block font-sans text-2xl font-semibold leading-snug tracking-normal text-white antialiased">
                  {isSubmitSuccessful && FormView > secondStep ? "¡Gracias por contactarme!" : "¡Contáctame!"}
              </h4>
              

              {FormView === firstStep ? (
                  <PersonalDataTab register={register} errors={errors}/>
                ):(
                  <>
                    {FormView === secondStep ? (
                      <RatingTab register={register} errors={errors}/>
                    ):(
                      <SuccessfulTab formData={FormData}/> 
                    )}
                  </>
              )}
              <StepButtons FormView={FormView} setFormView={setFormView} reset={reset}/>
          </form>
          <Toaster position="bottom-right" richColors/>
        </div>
    )
}
export default Form;