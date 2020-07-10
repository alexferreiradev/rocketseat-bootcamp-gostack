import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Global from './styles/global';

import Header from './components/Header';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes />
            <Global />
        </BrowserRouter>
    );
}

export default App;
