import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { rootReducer } from './rootReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

import App from './App';
import CreateCustomer from './CreateCustomer';

import './index.css';

import * as serviceWorker from './serviceWorker';


const appReducer =  combineReducers({app:rootReducer, form:formReducer}); 
const loggerMiddleware = createLogger();
const store = createStore(appReducer, applyMiddleware(thunkMiddleware,loggerMiddleware));
const NotFound = () => <strong>Sorry No Page Found</strong>;
const Routing = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path={"/"} component={App} />
            <Route path={"/createnewcustomer"} component={CreateCustomer} />
            <Route component={NotFound}/>
        </Switch>  
    </Router>
)

const app = <Provider store={store}><Routing/></Provider>

// function App(){
//     var url = 'https://simpleexpressapi.azurewebsites.net/update';
// var data = {id:'5d31b40448454a3bfcfb7b53',contactDetail:[{"phone":"233343455","isActive":1}]};

// fetch(url, {
//   method: 'POST', // or 'PUT'
//   body: JSON.stringify(data), // data can be `string` or {object}!
//   headers:{
//     'Content-Type': 'application/json'
//   }
// }).then(res => res.json())
// .then(response => console.log('Success:', JSON.stringify(response)))
// .catch(error => console.error('Error:', error));


// return <div>hi</div>;
// }

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
