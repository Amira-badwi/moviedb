import reducer from "./reducer";
import moviesreducer from "./moviereducer";
import {combineReducers} from "redux"
export default combineReducers({

    reducer1:reducer,
    reducer2:moviesreducer
})

