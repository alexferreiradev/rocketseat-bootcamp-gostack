import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';

import history from './services/history';
import 'typeface-roboto';
import GlobalStyle from './styles/global';
import Routes from './routes/index';

import { store, persistor } from './store';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Routes />
                    <GlobalStyle />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
