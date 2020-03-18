import {combineReducers} from "redux";
import {dateReducer} from "./dateReducer";

const redusers = combineReducers({
    date:dateReducer,
});

export default redusers;