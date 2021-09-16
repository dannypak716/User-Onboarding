import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('Name is required!')
        .min(2, 'Are you sure that is your first name?'),
    last_name: yup
        .string()
        .trim()
        .required('Name is required!')
        .min(2, 'Are you sure that is your last name?'),
    email: yup
        .string()
        .email()
        .required('Email is required!'),
    password: yup
        .string()
        .trim()
        .required('Password is needed!')
        .min(6, "Password must be at least 6 characters long"),
    terms: yup.boolean().oneOf([true], 'Terms of Service must be checked')
})

export default formSchema;