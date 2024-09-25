const Rating = (props) => 
{
    const ratingOptions = [
        { id: "excellent", label: "Excelente" },
        { id: "good", label: "Buena" },
        { id: "poor", label: "Pobre" },
        { id: "terrible", label: "Terrible" }
    ]

    return ratingOptions.map((option) => (
            <div key={option.id} className="flex items-center space-x-2 mb-2">
                <input
                    type="radio"
                    id={option.id}
                    value={option.label}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary"
                    {...props.register("rating",  {
                        required: {
                            value: true,
                            message: "Elige una valoración"
                          }
                    })}
                />
                <label
                    htmlFor={option.id}
                    className="text-sm text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {option.label}
                </label>
            </div>))
}
export default Rating;