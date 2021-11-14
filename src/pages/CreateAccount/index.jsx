import styles from './style.module.scss';
import { Formik, Form } from 'formik';
import FieldInputComponent from '../../components/FieldInputComponent';
import RadioComponent from '../../components/RadioComponent';
import FormRow from '../../components/FormRow';
import { SignUpSchema } from '../../utils/validationSchemas';


const initialValues = {
  firstName: '',
  lastName: '',
  displayName: '',
  emailAdress: '',
  password: '',
  passwordConfirmation: ''
};

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
          <Formik initialValues={initialValues} validationSchema={SignUpSchema} validateOnBlur onSubmit={onSumbit}>
            <Form>
              <FormRow>
                <FieldInputComponent 
                  name='firstName' 
                  type='text'
                  placeholder='First Name'
                  className = {styles.form_field_double} 
                />
                <FieldInputComponent 
                  name='lastName' 
                  type='text'
                  placeholder='Last Name' 
                />
              </FormRow>
              <FormRow>
                <FieldInputComponent 
                  name='displayName' 
                  type='text' 
                  placeholder='Display Name' 
                  className = {styles.form_field_double} 
                />
                <FieldInputComponent 
                  name='emailAdress' 
                  type='email' 
                  placeholder='Email Adress'
                />
              </FormRow>
              <FormRow>
                <FieldInputComponent 
                  name='password' 
                  type='password' 
                  placeholder='Password Adress' 
                  className = {styles.form_field_double} 
                />
                <FieldInputComponent 
                  name='passwordConfirmation' 
                  type='password' 
                  placeholder='Password Confirmation'
                />
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