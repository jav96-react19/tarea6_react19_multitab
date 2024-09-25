import reactLogo from "@/assets/img/react.svg" 
import angularLogo from "@/assets/img/angular.svg"
import vueLogo from "@/assets/img/vue.svg"
import phpLogo from "@/assets/img/php.svg";

const Logos = () => 
{
    return {
        "react": {
            img: reactLogo,
            text: "Libreria para interfaces de usuario dinámicas.",
            category: "Frontend"
        },
        "angular": {
            img: angularLogo,
            text: "Framework robusto para aplicaciones web completas.",
            category: "Frontend"
        }, 
        "vue": {
            img: vueLogo,
            text: "Framework progresivo para interfaces de usuario flexibles.",
            category: "Frontend"
        },
        "php": {
            img: phpLogo,
            text: "Lenguaje de servidor para desarrollo web dinámico.",
            category: "Backend"
        }
    }
}
export default Logos;