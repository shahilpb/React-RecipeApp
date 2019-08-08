import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import NavBar from './Componant/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Container/HomePage';
import RecipePage from './Container/RecipePage';


ReactDOM.render(
    <Router>
        <div>
        <NavBar />
        <div>
            <Switch>
                <Route exact component={HomePage} path="/" />
                <Route component={RecipePage} path="/Recipe" />
            </Switch>
            {/* <Route component={Page404} /> */}
        </div>
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
