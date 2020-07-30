import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/reactotron';
import Routes from './routes';
import Global from './styles/global';

import Header from './components/Header';
import store from './store';
import history from './services/history';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Header />
                <Routes />
                <Global />
                <ToastContainer autoClose={3000} />
            </Router>
        </Provider>
    );
}

export default App;
