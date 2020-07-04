import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMidleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMidleware = createSagaMidleware(rootSaga);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer =
    process.env.NODE_ENV === 'development'
        ? composeEnhancers(applyMiddleware(sagaMidleware))
        : applyMiddleware(sagaMidleware);

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, enhancer);
/* eslint-enable */

export default store;
