import React, { Component, Fragment  } from "react";
import ActionType from './gelobalActionType';

import { Route, Redirect } from 'react-router-dom';

const globalState = {
    login: localStorage.getItem("user"),
    category : [],
    datas : [
        {
          key: 0,
          create: '15-16-2019',
          info: 'income',
          name: 'Test catagory 1',
        },
        {
          key: 1,
          create: '15-16-2019',
          info: 'income',
          name: 'Test catagory 2',
        },
        {
          key: 2,
          create: '15-16-2019',
          info: 'income',
          name: 'Test catagory 3',
        },
      ]
    
}
// Reducer
const rootReducer = (state = globalState, action) => {
  
    if(action.type == ActionType.IS_LOGIN){
        localStorage.setItem("user",  action.login)
        return{
            ...state,
            login: action.login
        }
    }

    if (action.type == ActionType.IS_LOGOUT) {
        
        
        localStorage.removeItem("user")
       return <Redirect push to='/login' />
        
    }

    if (action.type == ActionType.IS_ADD) {
      
        return{
            ...state,
            datas: state.datas.concat(action.data) 
        }
    }

    if (action.type == ActionType.IS_DELETE) {
      return{
          ...state,
          datas: state.datas.splice(1) 
      }
    }
    return state;
}


export default rootReducer;