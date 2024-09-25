import {useState} from "react";
const useFormView = () => 
{
    const [FormView, setFormView] = useState(1);

    return {FormView, setFormView}
}
export default useFormView;