import { ReducerLogin,ReducerRegister,getFollower,getAllUserReducer,followUnfollow,currentUserReducer,clearReducer } from "../reducers/AuthReducer";
import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import localStorage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from "redux-persist";
import { postShareReducer,currentPost,CreatestoryReduces,getstoryReducer } from "../reducers/postShareReducer";
import thunk from "redux-thunk";



const persistConfig={
    key:"root",
    version:1,
    storage:storage

}

// const persistedState = loadState()
const rootreducer=combineReducers({
    ReducerLogin,
    ReducerRegister,
    postShareReducer,
    getFollower,
    getAllUserReducer,
    followUnfollow,
    currentUserReducer,
    currentPost,
    CreatestoryReduces,
    getstoryReducer,
    clearReducer
})


const mainRoot=(state,action)=>{
  if(action.type=="CLEAR_ALL"){
    return state={...state,ReducerRegister:{}}
  }

  return rootreducer(state,action)
}

const persistedReducer=persistReducer(persistConfig,mainRoot)


const store=configureStore(
  
   {reducer:persistedReducer,
    middleware: [thunk]
}

)

export default store;