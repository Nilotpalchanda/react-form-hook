import React from 'react';
import './Signup.css';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from '../../ValidationSchema/ValidationSchema';
import { useLoadingBar } from 'react-top-loading-bar';

const Signup = () => {
    const [formData, setFormData] = React.useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const { start, complete } = useLoadingBar({
        color: "#1cdbbcd9",
        height: 6,
      });
    React.useEffect(() => {
        document.title = 'React Forms Hook Signup';
        if (location.pathname === '/dashboard/5') {
            document.getElementsByTagName('body')[0].style.display = 'inherit';
            document.getElementsByTagName('body')[0].style.paddingTop = '40px';
        } else {
            document.getElementsByTagName('body')[0].style.display = 'flex';
        }
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(SignUpSchema)
    });

    async function onSubmitHandler(data) {
        start()
        await new Promise((r) => setTimeout(r, 1000)); // Simulate API call
        complete()
        if (location.pathname === '/dashboard/5') {
            setFormData(data);
            return;
        }
        navigate('/');
        localStorage.setItem('loginDetails', JSON.stringify({ data }));
    }
    return (
        <>
            <main className="form-signin text-center bg-body rounded shadow-lg">
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <h1 className="h3 mb-3 fw-normal">Sign up</h1>
                    <div className="form-floating mb-2">
                        <input
                            type="text"
                            className={`form-control ${
                                errors.fullName ? 'is-invalid' : ''
                            }`}
                            id="fullName"
                            placeholder="Full Name"
                            {...register('fullName')}
                        />
                        {errors.fullName && (
                            <div class="invalid-feedback">
                                {errors.fullName.message}
                            </div>
                        )}
                        <label htmlFor="floatingInput">Full name</label>
                    </div>

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
                            type="text"
                            className={`form-control ${
                                errors.phoneNumber ? 'is-invalid' : ''
                            }`}
                            id="phoneNumber"
                            placeholder="Phone Number"
                            {...register('phoneNumber')}
                        />
                        {errors.phoneNumber && (
                            <div class="invalid-feedback">
                                {errors.phoneNumber.message}
                            </div>
                        )}

                        <label htmlFor="floatingInput">Phone Number</label>
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
                    <div className="form-floating">
                        <input
                            type="password"
                            className={`form-control m-0 ${
                                errors.confirmPassword ? 'is-invalid' : ''
                            }`}
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            {...register('confirmPassword')}
                        />
                        {errors.confirmPassword && (
                            <div class="invalid-feedback">
                                {errors.confirmPassword.message}
                            </div>
                        )}
                        <label htmlFor="floatingPassword">
                            Confirm Password
                        </label>
                    </div>
                    <button
                        className={`w-100 btn btn-lg btn-primary sign-up-button mt-2`}
                        type="submit"
                    >
                        {isSubmitting ? 'Loading....' : 'Sign Up'}
                    </button>
                </form>
            </main>
            {Object.keys(formData)?.length > 0 && !isSubmitting && (
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

export default Signup;
