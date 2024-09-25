
import profile from "@/assets/img/employee.webp"

import PropTypes from "prop-types"
import { MultiFrameworkButtons } from "@/components/MultiFrameworkButtons/MultiFrameworkButtons";
import useHandleLogo from "@/hooks/handleLogo/useHandleLogo.jsx";
import Logos from "@/models/Logos.jsx";

const Greetings = (props) => {
    const {name} = props;
    const {changeLogo, setChangeLogo} = useHandleLogo();
    const CurrentLogos = Logos();
    const {img, text, category} = CurrentLogos[changeLogo];
    
    return (
        <section className="px-8">
            <div className="mx-auto focus:outline-none h-32 w-32 mt-8">
                <img src={profile} alt="man avatar" className="h-full w-full rounded-full overflow-hidden shadow" />
            </div>
                <h1 className="font-bold text-4xl text-center py-4 text-[#e0f2fe]">¡Hola, me llamo {name}!</h1>
                <h2 className="font-bold text-2xl text-center text-[#e0f2fe] my-4">Soy Frontend Developer 👨‍💻</h2>
                <p className="text-center text-[#e0f2fe] text-lg">Me encanta hacer diseños atractivos y aplicar buenas prácticas para mejorar la experiencia de usuario.</p>
                <img src={img} alt="react logo" className="w-32 h-32 mx-auto my-4" />
                <h2 className="text-[#e0f2fe] text-center text-xl mb-2">{text}</h2>
                <h2 className="text-[#e0f2fe] text-center text-lg">{category}</h2>

                <MultiFrameworkButtons setChangeLogo = {setChangeLogo}/> 
                
        </section>
    )
}
Greetings.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Greetings
