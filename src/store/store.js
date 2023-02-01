import { createStore, applyMiddleware ,combineReducers} from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
 const Store=createStore( reducer,composeWithDevTools( applyMiddleware(thunk)));
 export default Store;