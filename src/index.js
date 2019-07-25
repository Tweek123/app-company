import "babel-polyfill"
import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { createStore,combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Router, Route, Switch } from "react-router-dom";
import  HomePage  from "../src/components/pages/homePage"
import  UserPage  from "../src/components/pages/userPage"
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import {watchGetUsers } from './sagas/sagas'
import './css/main.css'


function homePage() {  

  return <HomePage/>
}

function userPage() {  

  return <UserPage/>
}

const initialState = {
  users: []
}



function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":  
        const formAddUser = action.formAddUser;  
        let id = state.users.length;
        const newUser = new Object;
        newUser.id = id;
        newUser.firstName = formAddUser.firstName.value;
        newUser.lastName = formAddUser.lastName.value;
        newUser.position = formAddUser.position.value;
        newUser.address = formAddUser.adress.value;
        newUser.avatarUrl = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=400';
        newUser.comments = [];
        newUser.renderType = "HOME_RENDER";

        state.users.push(newUser);

        return { ...state, users: [...state.users]};

    case "REFRESH_USERS":     
      return { ...state, users: [...state.users]};
    case "ADD_COMMENT":     

        const formMessage = action.formMessage;
        const comment = new Object;
        
        comment.title = formMessage.title.value;
        comment.message = formMessage.comment.value;
        comment.phone = formMessage.phone.value; 
        state.users[action.id].comments.push(comment);

      return { ...state, users: [...state.users]};

      case "GET_USERS":

      return { ...state, users: [...state.users]};

      case "REF_USERS":
      state.users = [...action.data];
            
      return { ...state, users: [...state.users]};  

    default:
      return state;
  }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    reducer: reducer,
    routing: routerReducer,
  }),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(watchGetUsers);

const history = syncHistoryWithStore(createHistory(), store);

ReactDOM.render((    
    <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={homePage}/>
            <Route path="/user" component={userPage}/>
          </Switch> 
        </Router>
    </Provider>

    ), document.getElementById('root'))