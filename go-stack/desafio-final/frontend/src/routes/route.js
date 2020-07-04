import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { store } from '../store';

export default function RouteWrapper({
    component: Component,
    isPrivate = false,
    ...rest
}) {
    const { logado = true } = store.getState().user;
    // const logado = true;

    if (!logado && isPrivate) {
        return <Redirect to="/" />;
    }

    if (logado && !isPrivate) {
        return <Redirect to="/encomendas" />;
    }

    return <Route {...rest} component={Component} />;
}
