import { combineReducers } from 'redux';

import user from './user/reducer';
import encomenda from './encomenda/reducer';

export default combineReducers({ user, encomenda });
