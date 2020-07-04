import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMidleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducers from './persistReducer';

const sagaMidleware = createSagaMidleware(rootSaga);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer =
    process.env.NODE_ENV === 'development'
        ? composeEnhancers(applyMiddleware(sagaMidleware))
        : applyMiddleware(sagaMidleware);

/* eslint-disable no-underscore-dangle */
const store = createStore(persistReducers(rootReducer), enhancer);
/* eslint-enable */

const persistor = persistStore(store);

export { store, persistor };
