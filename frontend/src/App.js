import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';

const App = () => {
    return (
        <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
        </Routes>
    );
};

export default App;
