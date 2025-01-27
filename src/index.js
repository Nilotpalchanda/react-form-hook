import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LoadingBarContainer } from 'react-top-loading-bar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <LoadingBarContainer>
            <App />
        </LoadingBarContainer>
    </React.StrictMode>
);
