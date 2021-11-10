import styles from './style.module.scss'
import { Field } from 'formik';
import cx from 'classnames';

function FieldInputComponent({name, type, className}) {
    return (
        <Field name={name}>
            {
                ({ field, form, meta}) => {
                    const inputStyles = cx({
                        [styles.normal]: !meta.error && meta.touched,
                        [styles.error]: meta.error && meta.touched
                    });
                    console.log(meta);
                    return (
                        <>
                            <input type={type} className={`${inputStyles} ${className}`} {...field} />
                        </>
                    );
                }
            }
        </Field>
    );
}

export default FieldInputComponent;