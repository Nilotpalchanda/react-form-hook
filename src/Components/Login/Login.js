import React from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    emailId: yup.string().email().required('Email is required'),
    password: yup
        .string()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(5, 'Value should be more than 5 digits')
        .required('Password is required')
});

const Login = () => {
    const [loginData, setLoginData] = React.useState({});
    const [hasAccount, setHasAccount] = React.useState(true);
    const [formData, setFormData] = React.useState({});
    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
        document.title = 'React Forms Hook Login';
        if (location.pathname === '/dashboard/3') {
            document.getElementsByTagName('body')[0].style.display = 'inherit';
        } else {
            document.getElementsByTagName('body')[0].style.display = 'flex';
        }
        let localStorageData = localStorage.getItem('loginDetails');
        setLoginData(JSON.parse(localStorageData));
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: yupResolver(schema)
    });

    async function onSubmitLoginHandler(data) {
        if (location.pathname === '/dashboard/3') {
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
            } else setHasAccount(false);
        } else {
            setHasAccount(false);
        }
    }
    return (
        <>
            <main className="form-signin text-center bg-body rounded shadow-lg">
                <form onSubmit={handleSubmit(onSubmitLoginHandler)}>
                    <h1 className="h3 mb-3 fw-normal">Login</h1>

                    <div className="form-floating mb-2">
                        <input
                            type="email"
                            className={`form-control ${
                                errors.emailId ? 'is-invalid' : ''
                            }`}
                            id="emailId"
                            placeholder="name@example.com"
                            {...register('emailId')}
                        />
                        {errors.emailId && (
                            <div class="invalid-feedback">
                                {errors.emailId.message}
                            </div>
                        )}
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input
                            type="password"
                            className={`form-control m-0 ${
                                errors.password ? 'is-invalid' : ''
                            }`}
                            id="password"
                            placeholder="Password"
                            {...register('password')}
                        />
                        {errors.password && (
                            <div class="invalid-feedback">
                                {errors.password.message}
                            </div>
                        )}
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button
                        className={`w-100 btn btn-lg  login-button `}
                        type="submit"
                    >
                        {isSubmitting ? 'Loading....' : 'Sign in'}
                    </button>
                    {!hasAccount && (
                        <p className="has-account">
                            You dont have account with us. Please&nbsp;
                            <Link to={'/signup'}>Sign Up</Link>
                        </p>
                    )}
                </form>
            </main>
            {Object.keys(formData)?.length > 0 && !isSubmitting && (
                <div className="form-signin container bg-body rounded shadow-lg mt-4 pt-4 pb-4 ">
                    <h1>Form Data</h1>
                    <pre>{JSON.stringify(formData, null, 2)}</pre>
                </div>
            )}
        </>
    );
};

export default Login;
