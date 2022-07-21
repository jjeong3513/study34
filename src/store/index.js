import { configureStore,combineReducers } from '@reduxjs/toolkit';
import videoSlice from './video/videoSlice';
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer } from "redux-persist";
/* import storage from "redux-persist/lib/storage"*/
const persistConfig ={
    key: "root",
    storage:storageSession,
    whitelist:['video'], //여러개의 리듀서를 쓸 때 특정 로컬에 세션을 적용하고 싶을 때 사용
}
const reducer  = combineReducers({
    video:videoSlice,
})

const persistedReducer =persistReducer(persistConfig,reducer)

const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) =>  getDefaultMiddleware({ 
        serializableCheck:false
    })
})

export default store;