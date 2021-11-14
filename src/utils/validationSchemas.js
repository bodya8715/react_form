import * as yup from 'yup';

export const SignUpSchema = yup.object().shape({
    firstName: yup.string().matches(/[A-Z][a-z]{1,32}/, 'Некорректное имя').required('Обязательно'),
    lastName:  yup.string().matches(/[A-Z][a-z]{1,32}/, 'Некорректная фамилия').required('Обязательно'),
    displayName:  yup.string().matches(/^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[$_#^!%]).{8,32}$/, 'Некорректное имя').required('Обязательно'),
    emailAdress: yup.string().email('Введите верный email').required('Обязательно'),
    password: yup.string().matches(/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[a-z])(?=.*?[$_#^!%]).{8,32}$/, 'Некорректный пароль').required('Обязательно'),
    passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно')
});

export const SignInSchema = yup.object().shape({
    emailAdress: yup.string().email('Введите верный email').required('Обязательно'),
    password: yup.string().matches(/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[a-z])(?=.*?[$_#^!%]).{8,32}$/, 'Некорректный пароль').required('Обязательно')
});