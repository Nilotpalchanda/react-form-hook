import React from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '../../ValidationSchema/ValidationSchema';
import { useLoadingBar } from 'react-top-loading-bar';

const Login = () => {
    const [loginData, setLoginData] = React.useState({});
    const [formData, setFormData] = React.useState({});
    const [hasAccount, setHasAccount] = React.useState(true);
    const [loadingCompleted, setIsLoadingCompleted] = React.useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const { start, complete } = useLoadingBar({
        color: '#1cdbbcd9',
        height: 6,
        onLoaderFinished: function () {
            setIsLoadingCompleted(true);
        }
    });

    const intoDashboardLoginForm = location.pathname === '/dashboard/4';
    React.useEffect(() => {
        document.title = 'React Forms Hook Login';
        if (intoDashboardLoginForm) {
            document.getElementsByTagName('body')[0].style.display = 'inherit';
            document.getElementsByTagName('body')[0].style.paddingTop = '40px';
        } else {
            document.getElementsByTagName('body')[0].style.display = 'flex';
        }
        let localStorageData = localStorage.getItem('loginDetails');
        setLoginData(JSON.parse(localStorageData));
    }, []);

    const methods = useForm({
        resolver: yupResolver(LoginSchema)
    });

    async function onSubmitLoginHandler(data) {
        try {
            start();
            if (intoDashboardLoginForm) {
                await new Promise((r) => setTimeout(r, 1000)); // Simulate API call
                complete();
                setFormData(data);
                return;
            }
            if (loginData) {
                if (
                    data.emailId === loginData.data.emailId &&
                    data.password === loginData.data.password
                ) {
                    await new Promise((r) => setTimeout(r, 1000)); // Simulate API call
                    navigate('/dashboard', {
                        state: {
                            userName: loginData.data.fullName,
                            emailId: loginData.data.emailId
                        }
                    });
                } else {
                    setHasAccount(false);
                }
            }
            complete();
        } catch (e) {
            console.error('Login onsubmit errror:::', e);
        }
    }
    return (
        <>
            <main className="form-signin text-center bg-body rounded shadow-lg">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmitLoginHandler)}>
                        <h1 className="h3 mb-3 fw-normal">Login</h1>
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
                                type={'password'}
                                name={'password'}
                                placeholder={'Password'}
                                headerLabelText={'Password'}
                            />
                        </div>
                        <button
                            className={`w-100 btn btn-lg  login-button `}
                            type="submit"
                        >
                            {methods.formState.isSubmitting
                                ? 'Loading....'
                                : 'Sign in'}
                        </button>
                        {!hasAccount && (
                            <p className="has-account">
                                You Dont have account with us. Please&nbsp;
                                <Link to={'/signup'}>Sign Up</Link>
                            </p>
                        )}
                        {!intoDashboardLoginForm && hasAccount && (
                            <p className="has-account">
                                Don't have an account?&nbsp;
                                <Link to={'/signup'}>Sign Up</Link>
                            </p>
                        )}
                    </form>
                </FormProvider>
            </main>
            {Object.keys(formData)?.length > 0 &&
                !methods.formState.isSubmitting && (
                    <div className="form-signin container bg-body rounded shadow-lg mt-4 pt-4 pb-4 ">
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

export default Login;
