import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../pages/Login';
import GerenciaEncomendas from '../pages/GerenciaEncomendas';
import GerenciaDestinatarios from '../pages/GerenciaDestinatarios';
import GerenciaEntregadores from '../pages/GerenciaEntregadores';
import GerenciaProblemas from '../pages/GerenciaProblemas';
import CadastroEncomenda from '../pages/CadastroEncomenda';
import CadastroEntregador from '../pages/CadastroEntregador';
import CadastroDestinatario from '../pages/CadastroDestinatario';
import Route from './route';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route
                path="/destinatarios"
                component={GerenciaDestinatarios}
                isPrivate
            />
            <Route
                path="/entregadores"
                component={GerenciaEntregadores}
                isPrivate
            />
            <Route
                path="/encomendas"
                component={GerenciaEncomendas}
                isPrivate
            />
            <Route path="/problemas" component={GerenciaProblemas} isPrivate />
            <Route
                path="/cadastrar_encomenda/:id"
                component={CadastroEncomenda}
                isPrivate
            />
            <Route
                path="/cadastrar_encomenda"
                component={CadastroEncomenda}
                isPrivate
            />
            <Route
                path="/cadastrar_entregador"
                component={CadastroEntregador}
                isPrivate
            />
            <Route
                path="/cadastrar_destinatario"
                component={CadastroDestinatario}
                isPrivate
            />
            <Route path="/" component={Login} />
        </Switch>
    );
}
