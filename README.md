# Tarea 6 React 19 - MultiTab

 ## 🔥 NOVEDADES

- Componente:

  - **Form** --> Gestión del estado del formulario con **useForm** de **react-hook-form**
  - **FormTabs** --> Contiene cada una de las vistas del formulario.
      Además del componente de los botones que irán cambiando según la vista.
  - **Rating** --> Renderiza el elemento de elección de la valoración de la aplicación que se encuentra en la segunda vista.
  - **StepNatigation** -> Contiene los elementos de navegación como el cambio de vista a partir de números y los botones.

- **constants**: 
    Contiene el fichero de los valores estáticos de los steps del form para reutilizarlo en la aplicación


- Directorio de **custom hooks**:

   - **FormData** --> Define el estado que almacenará los datos del usuario del formulario
   - **FormView** -> Define el estado que cambiará de vista.

- Directorio **utils**:

  - **MessageNotification** --> Contiene la función para mostrar el mensaje personalizado cuando el formulario se envia de forma correcta y cuando no

  - **handleFormView** --> Contiene las funciones de volver a la primera cuando se haya enviado el formulario, además de aumentar y decrementar la vista.

<br/>

##

![alt text](/src/assets/img/task6_multitab_preview.gif)

## 📖 WIKI

HandleSubmit: [https://react-hook-form.com](https://react-hook-form.com/docs/useform/handlesubmit "HandleSubmit useForm")
<br/>

Register: [https://react-hook-form.com](https://react-hook-form.com/docs/useform/register "Register useForm")
<br/>

FormState: [https://react-hook-form.com](https://react-hook-form.com/docs/useform/formstate "FormState useForm")
<br/>

Reset: [https://react-hook-form.com](https://react-hook-form.com/docs/useform/reset "Reset useForm")

<br/>
Codigo de ejemplo inspirado para la tarea:

[https://codesandbox.io](https://codesandbox.io/p/sandbox/react-hook-form-reset-v7-r7m5s?file=%2Fsrc%2Findex.js "Code and Sandbox Ejemplo");


Componente de notificación Sonner:
[https://sonner.emilkowal.ski/](https://sonner.emilkowal.ski/ "Sonner")






