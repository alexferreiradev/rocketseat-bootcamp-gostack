import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotron';
import Routes from './routes';
import Global from './styles/global';

import Header from './components/Header';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes />
                <Global />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
