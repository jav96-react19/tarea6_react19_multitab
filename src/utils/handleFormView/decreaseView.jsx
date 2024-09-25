const decreaseView = (setFormView) => 
{
    setFormView(oldView => oldView < 1 ? 1 : oldView - 1 );
}
export default decreaseView;