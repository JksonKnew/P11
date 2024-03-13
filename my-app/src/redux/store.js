import { combineReducers } from 'redux';
import authReducer from './common/reducers';

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;