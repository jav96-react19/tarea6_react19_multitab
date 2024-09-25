import Rating from "@/components/Rating/Rating.jsx";
import PropTypes from "prop-types";

const RatingTab = (props) => {

    const {register, errors} = props;
    
    return( 
        <>
            <h3 className="mb-8 block text-left font-sans text-base leading-snug tracking-normal text-white antialiased">Cual es tu valoración de la aplicación?</h3>
            <Rating register={register}/>
            {errors?.rating && <p className="mt-4 text-[#f87171] text-sm">🔥 {errors.rating.message}</p>}
        </>
    )
}

RatingTab.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object
}
export default RatingTab;
