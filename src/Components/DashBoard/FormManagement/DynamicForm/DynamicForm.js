import React, { useEffect } from 'react';
import './DynamicForm.css';
import { getDynamicFormData, formInputFields } from './DynamicFormData';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { useLoadingBar } from 'react-top-loading-bar';

const DynamicForm = () => {
    const [dynamicData, setDynamicData] = React.useState([]);
    const [formState, setFormState] = React.useState({});
    const [loadingCompleted, setIsLoadingCompleted] = React.useState(false);
    const { start, complete } = useLoadingBar({
        color: '#1cdbbcd9',
        height: 6,
        onLoaderFinished: function () {
            setIsLoadingCompleted(true);
        }
    });
    useEffect(() => {
        start();
        document.title = 'Dynamic Form with JSON Data';
        document.getElementsByTagName('body')[0].style.display = 'inherit';
        getDynamicFormData().then((res) => {
            complete();
            setDynamicData(res);
        });
    }, []);

    const methods = useForm();
    const onSubmit = async (data) => {
        try {
            start();
            await new Promise((r) => setTimeout(r, 1000)); // Simulate API call
            complete();
            setFormState(data);
        } catch (e) {
            console.error('Dynamic form onsubmit error:::', e);
        }
    };

    const getFiledBasedOnType = (field) => {
        if (formInputFields.includes(field.type)) {
            return <InputField field={field} />;
        } else if (field.type === 'select') {
            return <SelectField field={field} />;
        } else if (field.type === 'textarea') {
            return <TextAreaField field={field} />;
        } else if (field.type === 'checkbox') {
            return <CheckboxField field={field} />;
        } else {
            return <InputField field={field} />;
        }
    };
    return (
        <>
            <div
                className={`container bg-body rounded shadow-lg mt-4 pt-4 pb-4 ${
                    Object.keys(formState)?.length > 0 &&
                    !methods.formState.isSubmitting
                        ? 'dynamic-form-div-with-result'
                        : 'dynamic-form-div'
                }`}
            >
                <div className="container">
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            {dynamicData.map((section, index) => {
                                return (
                                    <>
                                        <h3>{section.sectionTitle}</h3>
                                        <div className="row" key={index}>
                                            {section.fields.map(
                                                (field, sectionIndex) => {
                                                    return (
                                                        <div
                                                            className="col-md-6 col-sm-12 mb-3"
                                                            key={sectionIndex}
                                                        >
                                                            <label>
                                                                {field.label}
                                                            </label>
                                                            {getFiledBasedOnType(
                                                                field
                                                            )}
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </>
                                );
                            })}
                            <button
                                className="btn btn-primary sumbit-dynamic-button"
                                type="submit"
                            >
                                {methods.formState.isSubmitting
                                    ? 'Submitting....'
                                    : 'Submit'}
                            </button>
                        </form>
                    </FormProvider>
                </div>
            </div>
            {Object.keys(formState)?.length > 0 &&
                !methods.formState.isSubmitting && (
                    <div className="container bg-body rounded shadow-lg mt-4 pt-4 pb-4 dynamic-form-data">
                        <h1>Dynamic Form Data</h1>
                        <pre>{JSON.stringify(formState, null, 2)}</pre>
                    </div>
                )}
        </>
    );
};
function InputField({ field }) {
    const {
        register,
        formState: { errors }
    } = useFormContext();
    return (
        <>
            <input
                {...register(field.name, {
                    required: {
                        value: field.required,
                        message: `${field.label} is required`
                    },
                    pattern:
                        field.name === 'password'
                            ? {
                                  value: field.numberOnly,
                                  message: `${field.label} is number only`
                              }
                            : null
                })}
                type={field.type}
                placeholder={field.placeholder}
                className="form-control"
            />
            {errors[field.name] && (
                <div className="invalid-feedback">
                    {errors[field.name].message}
                </div>
            )}
        </>
    );
}
function SelectField({ field }) {
    const {
        register,
        formState: { errors }
    } = useFormContext();
    return (
        <>
            <select
                {...register(field.name, {
                    required: {
                        value: field.required,
                        message: `${field.label} is required`
                    }
                })}
                className="form-control"
            >
                {field.options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors[field.name] && (
                <div className="invalid-feedback">
                    {errors[field.name].message}
                </div>
            )}
        </>
    );
}
function TextAreaField({ field }) {
    const {
        register,
        formState: { errors }
    } = useFormContext();
    return (
        <>
            <textarea
                {...register(field.name, {
                    required: {
                        value: field.required,
                        message: `${field.label} is required`
                    },
                    minLength: {
                        value: 10,
                        message: `${field.label} required more than 10 charectors`
                    }
                })}
                placeholder={field.placeholder}
                className="form-control"
            />
            {errors[field.name] && (
                <div className="invalid-feedback">
                    {errors[field.name].message}
                </div>
            )}
        </>
    );
}
function CheckboxField({ field }) {
    const {
        register,
        formState: { errors }
    } = useFormContext();
    return (
        <div className="custom-control custom-checkbox">
            <input
                {...register(field.name, {
                    required: {
                        value: field.required,
                        message: `${field.label} is required`
                    }
                })}
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
                {field.label}
            </label>
            {errors[field.name] && (
                <div className="invalid-feedback">
                    {errors[field.name].message}
                </div>
            )}
        </div>
    );
}

export default DynamicForm;
