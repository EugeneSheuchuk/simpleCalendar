import { combineReducers } from 'redux';
import { dateReducer } from './dateReducer';

const rootReducer = combineReducers({
    date: dateReducer,
});

export default rootReducer;
