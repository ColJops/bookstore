import { useField } from "formik";

const MyInputF = ({ label, ...props}) => {
    const [field, meta] = useField(props);
    return (
            <div>
                <label htmlFor={props.name}>{label}</label>
                <input {...field} {...props} />
                {meta. error ? (
                    <small className="alart alert-danger form-text text-muted">
                        {meta.error}
                    </small>
                ): null}
            </div>
        );
};

export default MyInputF;