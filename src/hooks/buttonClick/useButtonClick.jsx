import {useState, useRef} from "react";
const useButtonClick = () => 
{
    const ButtonRef = useRef(null);

    const [ButtonClick, setButtonClick] = useState({
        IsClick: false,
        Times: 0
    });
    return {ButtonClick, setButtonClick, ButtonRef}
}
export default useButtonClick;