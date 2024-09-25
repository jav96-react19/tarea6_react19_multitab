const increaseView = (setFormView) => 
{
    setFormView(oldView => oldView > 2 ? 2 : oldView + 1 );
}
export default increaseView;