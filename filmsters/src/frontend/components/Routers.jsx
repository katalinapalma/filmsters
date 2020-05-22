import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Login from './Login';


const Routers = () => (
    <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={Login} />
    </Switch>
)

export default Routers;