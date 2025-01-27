import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { LoadingBarContainer } from "react-top-loading-bar";

const Signup = React.lazy(() => import('./Components/Signup/Signup'));
const Login = React.lazy(() => import('./Components/Login/Login'));
const DashBoard = React.lazy(() => import('./Components/DashBoard/DashBoard'));
const AppLayout = React.lazy(() => import('./Components/AppLayout/AppLayout'));
const HealthForm = React.lazy(() =>
    import('./Components/DashBoard/FormManagement/HealthForm/HealthForm')
);
const TabForm = React.lazy(() =>
    import('./Components/DashBoard/FormManagement/TabForm/TabForm')
);
const DynamicForm = React.lazy(() =>
    import('./Components/DashBoard/FormManagement/DynamicForm/DynamicForm')
);

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    element={
                        <React.Suspense fallback={null}>
                            <AppLayout />
                        </React.Suspense>
                    }
                >
                    <Route path="dashboard">
                        <Route index element={<DashBoard />} />
                        <Route path="1" element={<HealthForm />} />
                        <Route path="2" element={<TabForm />} />
                        <Route path="3" element={<DynamicForm />} />
                        <Route path="4" element={<Login />} />
                        <Route path="5" element={<Signup />} />
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
