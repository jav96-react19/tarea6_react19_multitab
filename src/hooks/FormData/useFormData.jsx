import {useState} from "react";
const useFormData = () => 
{
    const [FormData, setFormData] = useState({
        name: "", 
        email: "", 
        feedback: ""
    });

    return {FormData, setFormData};
}
export default useFormData;