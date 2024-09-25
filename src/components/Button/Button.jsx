
import useButtonClick from "@/hooks/buttonClick/useButtonClick.jsx";
import handleButtonClick from "@/utils/ButtonDetails/handleButtonClick.jsx";
import handleButtonText from "@/utils/ButtonDetails/handleButtonText";
import Form from '@/components/Form/Form.jsx';


const Button = () => 
{
    const {ButtonClick, setButtonClick, ButtonRef} = useButtonClick();
    const {IsClick, Times} = ButtonClick;
    
    return (
        <footer className="text-center my-4">
             <button ref={ButtonRef} 
                onClick={() => handleButtonClick(setButtonClick)} 
                onMouseOver={(e) => handleButtonText(e, ButtonRef.current)}
                onMouseOut={(e) => handleButtonText(e, ButtonRef.current)}
                className={`${IsClick ? 'powerOn' : 'powerOff'} mt-8 text-white font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50`}>
                Clicame!
            </button>
            {IsClick ? <span className="mt-8 block font-bold text-[#e0f2fe]">Clicaste</span> : <span className="mt-8 block font-bold text-[#e0f2fe]">No clicaste</span>}
            {<span className="text-[#e0f2fe]">Veces clicado: {Times}</span>}


            <Form />            
        </footer>
    )
}
export default Button;