import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import applicationsReducer from './applicationsReducer';


const appReducer = combineReducers ({
	loginReducer,
	applicationsReducer
});

export default appReducer;