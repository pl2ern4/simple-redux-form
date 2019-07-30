import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { rootReducer } from './rootReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import App from './App';
import CreateCustomer from './CreateCustomer';
import customMiddleware from './customMiddleware'; 

import './index.css';

import * as serviceWorker from './serviceWorker';


const appReducer =  combineReducers({app:rootReducer, form:formReducer}); 
const loggerMiddleware = createLogger();
const store = createStore(appReducer, applyMiddleware(thunkMiddleware, loggerMiddleware, customMiddleware));
const NotFound = () => <strong>Sorry No Page Found</strong>;
const Routing = () => (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path="/createnewcustomer" component={CreateCustomer} />
            <Route path="/" component={App} />
            <Route component={NotFound}/>
        </Switch>  
    </HashRouter>
);

const app = <Provider store={store}><Routing/></Provider>

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
