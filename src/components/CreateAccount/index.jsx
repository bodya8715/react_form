import styles from './style.module.scss'
import { Formik, Form } from 'formik';
import FieldInputComponent from '../FieldInputComponent';
import * as yup from 'yup';


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

function CreateAccount() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_container}>
          <div className={styles.header_logo_wrapper}>
            <img src="https://www.squadhelp.com/img/logo.png" alt="logo"/>
          </div>
          <div>
            <a className={styles.login_button} type='button'>Login</a>
          </div>
        </div>
      </header>
      <div className={styles.form_container}>
      <div className={styles.form}>
        <h1 className={styles.form_title}>CREATE AN ACCOUNT</h1>
        <p className={styles.form_description}>
          We always keep your name and email address private.
        </p>
        <Formik initialValues={initialValues} validationSchema={validationSchema} validateOnBlur onSubmit={onSumbit}>
          <Form className={styles.form_body}>
            <div className={styles.form_row}>
              <FieldInputComponent className={styles.form_field} name='firstName' type='text' />
              <FieldInputComponent className={styles.form_field} name='lastName' type='text'/>
            </div>
            <div className={styles.form_row}>
              <FieldInputComponent className={styles.form_field} name='displayName' type='text' />
              <FieldInputComponent className={styles.form_field} name='emailAdress' type='email'/>
            </div>
            <div className={styles.form_row}>
              <FieldInputComponent className={styles.form_field} name='password' type='password' />
              <FieldInputComponent className={styles.form_field} name='passwordConfirmation' type='password'/>
            </div>
            <div className={styles.form_radio_wrapper}>
              <label className={styles.form_radio_item}>
                <input name="join" type='radio' value='Buyer'/>
                <div className={styles.form_radio_inner}>
                  <h3>Join As a Buyer</h3>
                  <p>I am looking for a Name, Logo or Tagline for my business, brand or product.</p>
                </div>
              </label>
            </div>
            <div className={styles.form_radio_wrapper}>
              <label className={styles.form_radio_item}>
                <input name="join" type='radio' value='Buyer'/>
                <div className={styles.form_radio_inner}>
                  <h3>Join As a Creative or Marketplace Seller</h3>
                  <p>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</p>
                </div>
              </label>
            </div>
            <button className={styles.form_confirm} type='submit'>Create account</button>
          </Form>
        </Formik>
      </div>
      </div>
    </>
  );
}

export default CreateAccount;