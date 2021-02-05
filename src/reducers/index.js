import { combineReducers } from 'redux';
import playbillReducer from './playbillReducer';
import creditReducer from './creditReducer';

const rootReducer = combineReducers({
    playbillReducer,
    creditReducer
});

export default rootReducer;