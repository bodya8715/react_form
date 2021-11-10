import styles from './style.module.scss'
import { Formik, Form } from 'formik';
import Field from '../FieldComponent';
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
      <h1>CreateAccount</h1>
      <p>
        We always keep your name and email address private.
      </p>
      <Formik initialValues={initialValues} validationSchema={validationSchema} validateOnBlur onSubmit={onSumbit}>
        <Form>
          <Field name='emailAdress' /><br/>
          <Field name='password' />
        </Form>
      </Formik>
    </>
  );
}

export default CreateAccount;