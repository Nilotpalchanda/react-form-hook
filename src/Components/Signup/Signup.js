import React from 'react';
import './Signup.css';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from '../../ValidationSchema/ValidationSchema';
import { useLoadingBar } from 'react-top-loading-bar';

const Signup = () => {
    const [formData, setFormData] = React.useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const { start, complete } = useLoadingBar({
        color: '#1cdbbcd9',
        height: 6
    });
    React.useEffect(() => {
        document.title = 'React Forms Hook Signup';
        if (location.pathname === '/dashboard/5') {
            document.getElementsByTagName('body')[0].style.display = 'inherit';
            document.getElementsByTagName('body')[0].style.paddingTop = '40px';
        } else {
            document.getElementsByTagName('body')[0].style.display = 'flex';
        }
    }, [location.pathname]);

    const methods = useForm({
        resolver: zodResolver(SignUpSchema)
    });

    async function onSubmitHandler(data) {
        try {
            start();
            await new Promise((r) => setTimeout(r, 1000)); // Simulate API call
            complete();
            if (location.pathname === '/dashboard/5') {
                setFormData(data);
                return;
            }
            navigate('/');
            localStorage.setItem('loginDetails', JSON.stringify({ data }));
        } catch (e) {
            console.error('Signup onsubmit error', e);
        }
    }
    return (
        <>
            <main className="form-signin text-center bg-body rounded shadow-lg">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
                        <h1 className="h3 mb-3 fw-normal">Sign up</h1>
                        <div className="form-floating mb-2">
                            <InputElement
                                type={'text'}
                                name={'fullName'}
                                placeholder={'Full Name'}
                                headerLabelText={'Full Name'}
                            />
                        </div>
                        <div className="form-floating mb-2">
                            <InputElement
                                type={'email'}
                                name={'emailId'}
                                placeholder={'name@example.com'}
                                headerLabelText={'Email address'}
                            />
                        </div>
                        <div className="form-floating mb-2">
                            <InputElement
                                type={'text'}
                                name={'phoneNumber'}
                                placeholder={'Phone Number'}
                                headerLabelText={'Phone Number'}
                            />
                        </div>
                        <div className="form-floating mb-2">
                            <InputElement
                                type={'password'}
                                name={'password'}
                                placeholder={'Password'}
                                headerLabelText={'Password'}
                            />
                        </div>
                        <div className="form-floating">
                            <InputElement
                                type={'password'}
                                name={'confirmPassword'}
                                placeholder={'Confirm Password'}
                                headerLabelText={'Confirm Password'}
                            />
                        </div>
                        <button
                            className={`w-100 btn btn-lg btn-primary sign-up-button mt-2`}
                            type="submit"
                        >
                            {methods.formState.isSubmitting
                                ? 'Loading....'
                                : 'Sign Up'}
                        </button>
                    </form>
                </FormProvider>
            </main>
            {Object.keys(formData)?.length > 0 &&
                !methods.formState.isSubmitting && (
                    <div
                        className="form-signin container bg-body rounded shadow-lg mt-4 pt-4 pb-4"
                        style={{ marginBottom: '5rem' }}
                    >
                        <h1>Form Data</h1>
                        <pre>{JSON.stringify(formData, null, 2)}</pre>
                    </div>
                )}
        </>
    );
};

function InputElement({ type, name, placeholder, headerLabelText }) {
    const {
        register,
        formState: { errors }
    } = useFormContext();
    return (
        <>
            <input
                type={type}
                className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
                id={name}
                placeholder={placeholder}
                {...register(name)}
            />
            {errors[name] && (
                <div class="invalid-feedback">{errors[name].message}</div>
            )}
            <label htmlFor="floatingInput">{headerLabelText}</label>
        </>
    );
}

export default Signup;
