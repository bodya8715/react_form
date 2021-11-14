import styles from '../CreateAccount/style.module.scss';
import { Formik, Form } from 'formik';
import FormRow from "../../components/FormRow";
import FieldInputComponent from "../../components/FieldInputComponent";
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
                                <FieldInputComponent 
                                    name='emailAdress' 
                                    type='email' 
                                    placeholder='Email'
                                />
                            </FormRow>
                            <FormRow>
                                <FieldInputComponent 
                                    name='password' 
                                    type='password' 
                                    placeholder='Password'
                                />
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