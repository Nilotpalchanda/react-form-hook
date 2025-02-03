import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './TabForm.css';
import { TabFormSchema } from '../../../../ValidationSchema/ValidationSchema';
import { useLoadingBar } from 'react-top-loading-bar';

const TabForm = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [formState, setFormState] = React.useState({});
    const [loadingCompleted, setIsLoadingCompleted] = React.useState(false);
    const { start, complete } = useLoadingBar({
        color: '#1cdbbcd9',
        height: 6,
        onLoaderFinished: function () {
            setIsLoadingCompleted(true);
        }
    });
    React.useEffect(() => {
        document.title = 'Tab form with zod';
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        getValues,
        reset
    } = useForm({
        resolver: zodResolver(TabFormSchema),
        mode: 'onChange'
    });

    async function onSubmit(data) {
        try {
            start();
            await new Promise((r) => setTimeout(r, 1000)); // Simulate API call
            complete();
            setFormState(data);
            reset();
        } catch (e) {
            console.error('Tab form onsubmit error:::', e);
        }
    }
    function handleTabChange(index) {
        setActiveTab(index);
    }

    function handleNext() {
        if (activeTab < 3) {
            setActiveTab(activeTab + 1);
        }
    }

    function handleBack() {
        if (activeTab > 0) {
            setActiveTab(activeTab - 1);
        }
    }

    return (
        <>
            <div className="container bg-body rounded shadow-lg multi-tab-container">
                <Tabs onSelect={handleTabChange} selectedIndex={activeTab}>
                    <TabList>
                        <Tab>Personal Info</Tab>
                        <Tab>Contact</Tab>
                        <Tab>Address</Tab>
                        <Tab>Summary</Tab>
                    </TabList>

                    <TabPanel>
                        <h3>Personal Info</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label
                                    htmlFor="firstName"
                                    className="form-label"
                                >
                                    First Name:
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.firstName ? 'is-invalid' : ''
                                    }`}
                                    id="firstName"
                                    {...register('firstName')}
                                />
                                {errors.firstName && (
                                    <div className="invalid-feedback">
                                        {errors.firstName.message}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="lastName"
                                    className="form-label"
                                >
                                    Last Name:
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.lastName ? 'is-invalid' : ''
                                    }`}
                                    id="lastName"
                                    {...register('lastName')}
                                />
                                {errors.lastName && (
                                    <div className="invalid-feedback">
                                        {errors.lastName.message}
                                    </div>
                                )}
                            </div>

                            <button
                                type="button"
                                onClick={handleNext}
                                className="btn btn-primary tab-form-submit"
                            >
                                Next
                            </button>
                        </form>
                    </TabPanel>

                    <TabPanel>
                        <h3>Contact</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    className={`form-control ${
                                        errors.email ? 'is-invalid' : ''
                                    }`}
                                    id="email"
                                    {...register('email')}
                                />
                                {errors.email && (
                                    <div className="invalid-feedback">
                                        {errors.email.message}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">
                                    Phone:
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.phone ? 'is-invalid' : ''
                                    }`}
                                    id="phone"
                                    {...register('phone')}
                                />
                                {errors.phone && (
                                    <div className="invalid-feedback">
                                        {errors.phone.message}
                                    </div>
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={handleBack}
                                className="btn btn-secondary"
                                style={{ marginRight: '10px' }}
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="btn btn-primary tab-form-submit"
                            >
                                Next
                            </button>
                        </form>
                    </TabPanel>

                    <TabPanel>
                        <h3>Address</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">
                                    Address:
                                </label>
                                <textarea
                                    className={`form-control ${
                                        errors.address ? 'is-invalid' : ''
                                    }`}
                                    id="address"
                                    rows="3"
                                    {...register('address')}
                                />
                                {errors.address && (
                                    <div className="invalid-feedback">
                                        {errors.address.message}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">
                                    City:
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.city ? 'is-invalid' : ''
                                    }`}
                                    id="city"
                                    {...register('city')}
                                />
                                {errors.city && (
                                    <div className="invalid-feedback">
                                        {errors.city.message}
                                    </div>
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={handleBack}
                                className="btn btn-secondary"
                                style={{ marginRight: '10px' }}
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="btn btn-primary tab-form-submit"
                            >
                                Next
                            </button>
                        </form>
                    </TabPanel>
                    <TabPanel>
                        <h3>Summary</h3>
                        <div>
                            <h4>Personal Info</h4>
                            <p>First Name: {getValues('firstName')}</p>
                            <p>Last Name: {getValues('lastName')}</p>
                        </div>
                        <div>
                            <h4>Contact</h4>
                            <p>Email: {getValues('email')}</p>
                            <p>Phone: {getValues('phone')}</p>
                        </div>
                        <div>
                            <h4>Address</h4>
                            <p>Address: {getValues('address')}</p>
                            <p>City: {getValues('city')}</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Wrap the submit button within the form */}
                            <button
                                type="submit"
                                className={`tab-form-submit ${
                                    !isValid
                                        ? 'btn btn-secondary'
                                        : 'btn btn-primary'
                                }`}
                                disabled={!isValid}
                            >
                                {isSubmitting ? 'Sumitting....' : 'Submit'}
                            </button>
                            {!isValid && (
                                <p className="error-message">
                                    *** Submit button is disabled due to form
                                    has errors or blank fields.
                                </p>
                            )}
                        </form>
                    </TabPanel>
                </Tabs>
            </div>
            {!isSubmitting && loadingCompleted && (
                <div className="container bg-body rounded shadow-lg mt-4 pt-4 pb-4 tab-form-data">
                    <h1>Form Data</h1>
                    <pre>{JSON.stringify(formState, null, 2)}</pre>
                </div>
            )}
        </>
    );
};

export default TabForm;
