import { combineReducers } from 'redux';
import citasReducer from './citasReducer';

export default combineReducers({
    citas: citasReducer
});