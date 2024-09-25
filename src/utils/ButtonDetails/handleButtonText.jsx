const handleButtonText = (e, currentValue) => 
    e.type === "mouseover" ? currentValue.innerText = "¡Hey! Eso hace cosquillas 😄" : currentValue.innerText = "Clicame!";

export default handleButtonText;