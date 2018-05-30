import { combineReducers } from 'redux';
import loginReducer from './loginReducer';


const appReducer = combineReducers ({
	loginReducer,
});

export default appReducer;