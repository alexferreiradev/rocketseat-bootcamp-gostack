import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMidleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducers from './persistReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMidleware = createSagaMidleware();

// ? applyMiddleware(sagaMidleware)
// eslint-disable-next-line no-undef
const enhancer = ___DEV___
  ? composeEnhancers(applyMiddleware(sagaMidleware))
  : applyMiddleware(sagaMidleware);

/* eslint-disable no-underscore-dangle */
const store = createStore(persistReducers(rootReducer), enhancer);
/* eslint-enable */
sagaMidleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
