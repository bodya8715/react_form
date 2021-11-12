import * as yup from 'yup';

export const SignUpSchema = yup.object().shape({
    firstName: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    lastName:  yup.string().typeError('Должно быть строкой').required('Обязательно'),
    displayName:  yup.string().typeError('Должно быть строкой').required('Обязательно'),
    emailAdress: yup.string().email('Введите верный email').required('Обязательно'),
    password: yup.string().min(8).max(32).typeError('Должно быть строкой').required('Обязательно'),
    passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно')
});

export const SignInSchema = yup.object().shape({
    emailAdress: yup.string().email('Введите верный email').required('Обязательно'),
    password: yup.string().min(8).max(32).typeError('Должно быть строкой').required('Обязательно')
});