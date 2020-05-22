import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Login from './Login';
import Registration from './Registration';


const Routers = () => (
    <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
    </Switch>
)

export default Routers;