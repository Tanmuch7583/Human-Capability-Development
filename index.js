import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for createRoot
import CourseRegistration from './App';
import './index.css';

// Create a root for the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the new createRoot API
root.render(
    <React.StrictMode>
        <CourseRegistration />
    </React.StrictMode>
);