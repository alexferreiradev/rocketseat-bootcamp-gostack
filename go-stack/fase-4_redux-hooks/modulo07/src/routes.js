import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Main from './pages/Main';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/cart" component={Cart} />
        </Switch>
    );
}
