import styles from '../CreateAccount/style.module.scss';
import form_field_styles from './styles.module.scss';
import { Formik, Form } from 'formik';
import FormRow from "../FormRow";
import FieldInputComponent from "../FieldInputComponent";
import { SignInSchema } from '../../utils/validationSchemas';

const initialValues = {
    emailAdress: '',
    password: '',
};

function onSumbit(values, formikBag) {
    console.log(values);
    formikBag.resetForm();
}

function LoginToAccount() {
    return (
        <>
            <div className={styles.form_container}>
                <div className={styles.form}>
                    <h1 className={styles.form_title}>LOGIN TO YOUR ACCOUNT</h1>
                    <Formik initialValues={initialValues} validationSchema={SignInSchema} validateOnBlur onSubmit={onSumbit}>
                        <Form className={styles.form_body}>
                            <FormRow>
                                <FieldInputComponent name='emailAdress' type='email' placeholder='Email' className={form_field_styles.form_field}/>
                            </FormRow>
                            <FormRow>
                                <FieldInputComponent name='password' type='password' placeholder='Password' className={form_field_styles.form_field}/>
                            </FormRow>
                            <button className={styles.form_confirm} type='submit'>Login</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    );
}

export default LoginToAccount;