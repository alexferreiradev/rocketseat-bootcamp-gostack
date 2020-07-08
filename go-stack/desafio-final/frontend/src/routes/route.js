import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { store } from '../store';

export default function RouteWrapper({
    component: Component,
    isPrivate = false,
    ...rest
}) {
    // console.log(rest);
    const { logado = true } = store.getState().user;
    // const logado = true;

    if (!logado && isPrivate) {
        return <Redirect to="/" />;
    }

    if (logado && !isPrivate) {
        return <Redirect to="/encomendas" />;
    }

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Route {...rest} component={Component} />;
}
