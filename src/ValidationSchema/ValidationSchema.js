import * as yup from 'yup';
import { z } from 'zod';

export const LoginSchema = yup.object().shape({
    emailId: yup.string().email().required('Email is required'),
    password: yup
        .string()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(5, 'Value should be more than 5 digits')
        .required('Password is required')
});

export const SignUpSchema = z
    .object({
        fullName: z.string().nonempty('Full Name is required'),
        emailId: z
            .string()
            .email('Invalid Email')
            .nonempty('Email is required')
            .regex(/^[a-z0-9][\w\.]+\@\w+?(\.\w+){1,}$/, 'Invalid Email'),
        phoneNumber: z
            .string()
            .regex(/^[0-9]+$/, 'Must be only digits')
            .min(10, 'Value should be more than 10 digits')
            .nonempty('Phone Number is required'),
        password: z
            .string()
            .regex(/^[0-9]+$/, 'Must be only digits')
            .min(5, 'Value should be more than 5 digits')
            .nonempty('Password is required'),
        confirmPassword: z
            .string()
            .regex(/^[0-9]+$/, 'Must be only digits')
            .min(5, 'Value should be more than 5 digits')
            .nonempty('Password is required')
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword']
    });

export const HealthFormSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    dob: yup.date().required('Date of Birth is required'),
    email: yup
        .string()
        .email('Invalid email address')
        .required('Email address is required'),
    insurancePlan: yup.string().required('Insurance plan is required'),
    mailingAddress: yup.array().of(
        yup.object().shape({
            streetAddress: yup.string().required('Street Address is required'),
            city: yup.string().required('City is required'),
            region: yup.string().required('Region is required'),
            postalCode: yup.string().required('Postal Code is required')
        })
    )
});

export const TabFormSchema = z.object({
    // Tab 1 schema
    firstName: z
        .string()
        .min(4, 'Please enter a valid First name')
        .nonempty('First Name is required'),
    lastName: z
        .string()
        .min(4, 'Please enter a valid Last name')
        .nonempty('Last Name is required'),
    // Tab 2 schema
    email: z.string().email('Invalid Email').nonempty('Email is required'),
    phone: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits'),
    // Tab 3 schema
    address: z
        .string()
        .min(5, 'Please enter a valid address')
        .nonempty('Address is required'),
    city: z
        .string()
        .min(4, 'Please enter a valid city')
        .nonempty('City is required')
});
