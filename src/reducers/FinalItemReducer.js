import { combineReducers } from "redux";
import FirstReducer from "./FirstReducer";
import SecondReducer from "./SecondReducer";
import SubjectReducer from "./SubjectReducer";

const FinalItemReducer = combineReducers({
    FirstRed:FirstReducer,
    SecondRed:SecondReducer,
    SubjectRed:SubjectReducer

})


export default FinalItemReducer