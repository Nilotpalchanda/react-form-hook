import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        document.title = 'React Forms Dashboard';
        document.getElementsByTagName('body')[0].style.display = 'inherit';
    }, []);
    
    const [formList] = React.useState([
        { id: '1', cardName: 'Health Insurance Enrollment Form with Yup' },
        { id: '2', cardName: 'Tab Form with zod' },
        { id: '3', cardName: 'Login Form with Yup' },
        { id: '4', cardName: 'Sigup Form with Zod' },
        { id: '5', cardName: 'Dynamic Form (JSON Data)' },
    ]);

    function onClickCard(data) {
        navigate(`/dashboard/${data.id}`);
    }
    
    return (
        <div>
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal">React Forms</h1>
                <p class="fs-5 text-muted">
                    Creating a form is no more complicated while building a
                    react application with the help of react-hook-form.
                </p>
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {formList.map((data) => {
                            return (
                                <div class="col" key={data.id}>
                                    <div
                                        class="card shadow-sm"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div
                                            class="card-body"
                                            onClick={() => onClickCard(data)}
                                        >
                                            <p class="card-text">
                                                {data.cardName}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
