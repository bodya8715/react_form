import styles from './style.module.scss'
import { Field } from 'formik';
import cx from 'classnames';

function FieldComponent({name}) {
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
                            <input type="text" className={inputStyles} {...field} placeholder={`Введите `}/>
                        </>
                    );
                }
            }
        </Field>
    );
}

export default FieldComponent;