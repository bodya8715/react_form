import styles from './style.module.scss';
import { Formik, Form } from 'formik';
import FieldInputComponent from '../FieldInputComponent';
import RadioComponent from '../RadioComponent';
import EmptyComponent from '../EmptyComponent';
import FormRow from '../FormRow';
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
      <div className={styles.form_container}>
        <div className={styles.form}>
          <h1 className={styles.form_title}>CREATE AN ACCOUNT</h1>
          <p className={styles.form_description}>
            We always keep your name and email address private.
          </p>
          <Formik initialValues={initialValues} validationSchema={validationSchema} validateOnBlur onSubmit={onSumbit}>
            <Form className={styles.form_body}>
              <FormRow>
                <FieldInputComponent name='firstName' type='text' />
                <EmptyComponent/>
                <FieldInputComponent name='lastName' type='text' />
              </FormRow>
              <FormRow>
                <FieldInputComponent name='displayName' type='text' />
                <EmptyComponent/>
                <FieldInputComponent name='emailAdress' type='email' />
              </FormRow>
              <FormRow>
                <FieldInputComponent name='password' type='password' />
                <EmptyComponent/>
                <FieldInputComponent name='passwordConfirmation' type='password' />
              </FormRow>
            <RadioComponent name="join" type='radio' value='Buyer'/>
            <RadioComponent name="join" type='radio' value='Marketplace Seller'/>
            <button className={styles.form_confirm} type='submit'>Create account</button>
          </Form>
        </Formik>
      </div>
      </div>
    </>
  );
}

export default CreateAccount;