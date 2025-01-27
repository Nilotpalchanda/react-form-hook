import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import './HealthForm.css';
import { HealthFormSchema } from '../../../../ValidationSchema/ValidationSchema';

const HealthForm = () => {
    const [formState, setFormState] = React.useState({});
    React.useEffect(() => {
        document.title = 'Health Insurance Enrollment Form with Yup';
    }, []);
    const defaultFormValues = {
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        insurancePlan: '',
        mailingAddress: [
            { streetAddress: '', city: '', region: '', postalCode: '' }
        ]
    }
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isValid, isSubmitting }
    } = useForm({
        defaultValues: {...defaultFormValues},
        resolver: yupResolver(HealthFormSchema)
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'mailingAddress'
    });

    async function onSubmit(data) {
        await new Promise((r) => setTimeout(r, 1000)); // Simulate API call
        setFormState(data);
        reset({...defaultFormValues});
    }

    return (
        <>
            <div
                className={`container bg-body rounded shadow-lg mt-4 pt-4 pb-4 ${
                    Object.keys(formState)?.length > 0 &&
                    isValid &&
                    !isSubmitting
                        ? 'health-form-with-result'
                        : 'health-form'
                }`}
            >
                <h1 className="">Health Insurance Enrollment Form</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="mb-3 row">
                            <label htmlFor="firstName" className="form-label">
                                Employee name
                            </label>
                            <div className="col-6">
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.firstName ? 'is-invalid' : ''
                                    }`}
                                    id="firstName"
                                    placeholder="First name"
                                    {...register('firstName')}
                                />
                                {errors.firstName && (
                                    <div className="invalid-feedback">
                                        {errors.firstName.message}
                                    </div>
                                )}
                            </div>
                            <div className="col-6">
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.lastName ? 'is-invalid' : ''
                                    }`}
                                    id="lastName"
                                    placeholder="Last name"
                                    {...register('lastName')}
                                />
                                {errors.lastName && (
                                    <div className="invalid-feedback">
                                        {errors.lastName.message}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-12">
                                <label htmlFor="dob" className="form-label">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    className={`form-control ${
                                        errors.dob ? 'is-invalid' : ''
                                    }`}
                                    id="dob"
                                    {...register('dob', { valueAsDate: true })}
                                />
                                {errors.dob && (
                                    <div className="invalid-feedback">
                                        {errors.dob.message}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mb-3 row">
                            {fields.map((item, index) => {
                                return (
                                    <>
                                        <div
                                            className="col-11 mt-2"
                                            key={item.id}
                                        >
                                            <label
                                                htmlFor="streetAddress"
                                                className="form-label"
                                            >
                                                Mailing address
                                            </label>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className={`form-control ${
                                                        errors.streetAddress
                                                            ? 'is-invalid'
                                                            : ''
                                                    }`}
                                                    id="streetAddress"
                                                    placeholder="Street Address"
                                                    {...register(
                                                        `mailingAddress.${index}.streetAddress`
                                                    )}
                                                />
                                                {errors.streetAddress && (
                                                    <div className="invalid-feedback">
                                                        {
                                                            errors.streetAddress
                                                                .message
                                                        }
                                                    </div>
                                                )}
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-4">
                                                    <input
                                                        type="text"
                                                        className={`form-control ${
                                                            errors.city
                                                                ? 'is-invalid'
                                                                : ''
                                                        }`}
                                                        id="city"
                                                        placeholder="City"
                                                        {...register(
                                                            `mailingAddress.${index}.city`
                                                        )}
                                                    />
                                                    {errors.city && (
                                                        <div className="invalid-feedback">
                                                            {
                                                                errors.city
                                                                    .message
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-4">
                                                    <input
                                                        type="text"
                                                        className={`form-control ${
                                                            errors.region
                                                                ? 'is-invalid'
                                                                : ''
                                                        }`}
                                                        id="region"
                                                        placeholder="Region"
                                                        {...register(
                                                            `mailingAddress.${index}.region`
                                                        )}
                                                    />
                                                    {errors.region && (
                                                        <div className="invalid-feedback">
                                                            {
                                                                errors.region
                                                                    .message
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-4">
                                                    <input
                                                        type="text"
                                                        className={`form-control ${
                                                            errors.postalCode
                                                                ? 'is-invalid'
                                                                : ''
                                                        }`}
                                                        id="postalCode"
                                                        placeholder="Postal Code"
                                                        {...register(
                                                            `mailingAddress.${index}.postalCode`
                                                        )}
                                                    />
                                                    {errors.postalCode && (
                                                        <div className="invalid-feedback">
                                                            {
                                                                errors
                                                                    .postalCode
                                                                    .message
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-1 action-btn">
                                            {index > 0 && (
                                                <button
                                                    type="button"
                                                    class="btn btn-default btn-sm"
                                                    onClick={() =>
                                                        remove(index)
                                                    }
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="bi bi-trash"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                    </>
                                );
                            })}
                            <div className="mailing-adress-actions">
                                <button
                                    type="button"
                                    class="btn btn-default btn-sm"
                                    onClick={() =>
                                        append({
                                            streetAddress: '',
                                            city: '',
                                            region: '',
                                            postalCode: ''
                                        })
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-house-add"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h4a.5.5 0 1 0 0-1h-4a.5.5 0 0 1-.5-.5V7.207l5-5 6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                                        <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 1 0 1 0v-1h1a.5.5 0 1 0 0-1h-1v-1a.5.5 0 0 0-.5-.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-12">
                                <label htmlFor="email" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className={`form-control ${
                                        errors.email ? 'is-invalid' : ''
                                    }`}
                                    id="email"
                                    placeholder="abc@domain.com"
                                    {...register('email')}
                                />
                                {errors.email && (
                                    <div className="invalid-feedback">
                                        {errors.email.message}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-12">
                                <label
                                    htmlFor="insurancePlan"
                                    className="form-label"
                                >
                                    Insurance plan
                                </label>
                                <div class="form-check">
                                    <input
                                        type="radio"
                                        class="form-check-input"
                                        id="validationFormCheck2"
                                        value={'Insurance Plan 1'}
                                        {...register('insurancePlan')}
                                    />
                                    <label
                                        class="form-check-label"
                                        for="validationFormCheck2"
                                    >
                                        Insurance Plan 1
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input
                                        type="radio"
                                        class="form-check-input"
                                        id="validationFormCheck2"
                                        value={'Insurance Plan 2'}
                                        {...register('insurancePlan')}
                                    />
                                    <label
                                        class="form-check-label"
                                        for="validationFormCheck2"
                                    >
                                        Insurance Plan 2
                                    </label>
                                </div>

                                {errors.insurancePlan && (
                                    <div className="invalid-feedback">
                                        {errors.insurancePlan.message}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button
                                    type="submit"
                                    className={` submit-hf ${
                                        !isValid
                                            ? 'btn btn-secondary'
                                            : 'btn btn-primary'
                                    }`}
                                    disabled={!isValid}
                                >
                                    {isSubmitting ? 'Submitting....' : 'Submit'}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {Object.keys(formState)?.length > 0 && !isSubmitting && (
                <div className="container bg-body rounded shadow-lg mt-4 pt-4 pb-4 heath-form-data">
                    <h1>Form Data</h1>
                    <pre>{JSON.stringify(formState, null, 2)}</pre>
                </div>
            )}
        </>
    );
};

export default HealthForm;
