import styles from '../CreateAccount/style.module.scss';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FormRow from "../FormRow";
import FieldInputComponent from "../FieldInputComponent";

const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    emailAdress: '',
    password: '',
    passwordConfirmation: ''
  };
  
  const validationSchema = yup.object().shape({
    firstName: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    lastName:  yup.string().typeError('Должно быть строкой').required('Обязательно'),
    displayName:  yup.string().typeError('Должно быть строкой').required('Обязательно'),
    emailAdress: yup.string().email('Введите верный email').required('Обязательно'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно')
  });
  
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
                    <Formik initialValues={initialValues} validationSchema={validationSchema} validateOnBlur onSubmit={onSumbit}>
                        <Form className={styles.form_body}>
                            <FormRow>
                                <FieldInputComponent name='emailAdress' type='email' />
                            </FormRow>
                            <FormRow>
                                <FieldInputComponent name='password' type='password' />
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