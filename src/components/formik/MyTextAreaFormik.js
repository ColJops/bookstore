import PropTypes from "prop-types";
import { useField } from "formik";

const MyTextAreaF = ({ label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.name}>{label}</label>
            <textarea {...field} {...props} />
            {meta.error ? (
                <small className="alert alert-danger form-text form-muted">
                    {meta.error}
                </small> 
            ): null}
        </div>
    );
};
export default MyTextAreaF;