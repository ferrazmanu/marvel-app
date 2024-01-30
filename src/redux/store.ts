import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import { keysReducer } from './reducers';

const rootReducer = combineReducers({
    keys: keysReducer,
});

const store = createStore(rootReducer);

export default store;
