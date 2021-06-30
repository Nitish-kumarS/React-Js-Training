import {applyMiddleware, createStore} from 'redux'
import RootReducer from '../features/News/NewsReducers';
import createSagaMiddleware from "redux-saga";
import { watchNews } from '../features/News/NewsSaga';
import {composeWithDevTools} from 'redux-devtools-extension'
const sagaMiddleware=createSagaMiddleware();
const Middleware = [sagaMiddleware];
export const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(...Middleware)));

sagaMiddleware.run(watchNews);