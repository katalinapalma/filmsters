import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Login from './Login';
import Registration from './Registration';
import FilmPage from './FilmPage/FilmPage';
import SearchScreen from './Search/SearchScreen';


const Routers = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Registration} />
    <Route path="/movies" component={FilmPage} />
    <Route path="/searchScreen" component={SearchScreen} />
  </Switch>
)

export default Routers;