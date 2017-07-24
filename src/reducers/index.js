import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  routing: routing
});

export default rootReducer;
