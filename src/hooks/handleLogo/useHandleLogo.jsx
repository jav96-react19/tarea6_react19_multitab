import {useState} from "react";
const useHandleLogo = () => 
{
    const [changeLogo, setChangeLogo] = useState("react");
    return {changeLogo, setChangeLogo}
}
export default useHandleLogo;