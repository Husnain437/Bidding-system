import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authreducer from "./authreducer";
import postReducer from "./postReducer";
import bidsReducer from "./bidsReducer";
export default combineReducers({
    auth: authreducer,
    form: formReducer,
    posts: postReducer,
    bids: bidsReducer
});