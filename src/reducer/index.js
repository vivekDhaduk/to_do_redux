import { combineReducers } from "redux";
import {TodoReducer} from './To-Do-reducer'

export const rootreducer = combineReducers({
    todolist:TodoReducer,
})