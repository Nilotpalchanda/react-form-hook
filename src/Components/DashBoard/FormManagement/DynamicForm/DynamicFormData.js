const dynamicFormData = [
    {
        sectionTitle: 'User Information',
        fields: [
            {
                name: 'fullName',
                label: 'Full Name',
                type: 'text',
                required: true,
                placeholder: 'Enter full name'
            },
            {
                name: 'email',
                label: 'Email Address',
                type: 'email',
                required: true,
                placeholder: 'Enter email'
            },
            {
                name: 'password',
                label: 'Password',
                type: 'password',
                required: true,
                placeholder: 'Enter password',
                length: 5,
                numberOnly: /^[0-9]+$/
            },
            {
                name: 'birthday',
                label: 'Date of Birth',
                type: 'date',
                required: true
            }
        ]
    },
    {
        sectionTitle: 'Preferences',
        fields: [
            {
                name: 'colorPreference',
                label: 'Favorite Color',
                type: 'color',
                required: false
            },
            {
                name: 'experienceLevel',
                label: 'Experience Level',
                type: 'range',
                min: 0,
                max: 10,
                step: 1,
                required: false
            },
            {
                name: 'developmentSkills',
                label: 'Development Skills',
                type: 'select',
                options: [
                    { label: 'Select your skills', value: '' },
                    { label: 'Frontend', value: 'frontend' },
                    { label: 'Backend', value: 'backend' },
                    { label: 'Full Stack', value: 'fullstack' },
                    { label: 'Data Science', value: 'datascience' }
                ],
                required: true
            }
        ]
    },
    {
        sectionTitle: 'Feedback',
        fields: [
            {
                name: 'websiteFeedback',
                label: 'Your Feedback',
                type: 'textarea',
                required: true,
                placeholder: 'Share your thoughts',
                textLength: 10
            },
            {
                name: 'fileUpload',
                label: 'Upload File',
                type: 'file',
                required: false
            },
            {
                name: 'termsAgreement',
                label: 'Agree to Terms',
                type: 'checkbox',
                required: true
            }
        ]
    }
];

export async function getDynamicFormData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dynamicFormData);
        }, 1000);
    });
}
