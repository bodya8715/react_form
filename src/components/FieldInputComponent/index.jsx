import styles from './style.module.scss'
import { Field } from 'formik';
import cx from 'classnames';

function FieldInputComponent({
    name, 
    type, 
    classNameFormField, 
    classNameFormFieldCeil,
    classNameFormErrorMessage
}) {
    return (
        <Field name={name}>
            {
                ({ field, form, meta}) => {
                    const inputStyles = cx({
                        [styles.normal]: !meta.error && meta.touched,
                        [styles.error]: meta.error && meta.touched
                    });
                    return (
                        <div className={styles.form_field}>
                            <input type={type} className={`${inputStyles} ${styles.form_field_ceil}`} {...field} />{
                            meta.touched && meta.error && ( <div className={styles.form_error_message}>{meta.error}</div>)}
                        </div>
                    );
                }
            }
        </Field>
    );
}

export default FieldInputComponent;