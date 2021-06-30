
import { CalReducers } from '../features/Calculator/CalculatorReducer';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from 'redux-persist';
const persistConfig= {
    key:'root',
    storage,
}
const persistedReducer=persistReducer(persistConfig,CalReducers);
export const store = createStore(persistedReducer,applyMiddleware(thunk));
export const persistor =persistStore(store);
export default store;