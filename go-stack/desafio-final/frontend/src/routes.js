import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import GerenciaEncomendas from './pages/GerenciaEncomendas';
import GerenciaDestinatarios from './pages/GerenciaDestinatarios';
import GerenciaEntregadores from './pages/GerenciaEntregadores';
import GerenciaProblemas from './pages/GerenciaProblemas';
import CadastroEncomenda from './pages/CadastroEncomenda';
import CadastroEntregador from './pages/CadastroEntregador';
import CadastroDestinatario from './pages/CadastroDestinatario';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route
                    path="/destinatarios"
                    component={GerenciaDestinatarios}
                />
                <Route path="/entregadores" component={GerenciaEntregadores} />
                <Route path="/encomendas" component={GerenciaEncomendas} />
                <Route path="/problemas" component={GerenciaProblemas} />
                <Route
                    path="/cadastrar_encomenda"
                    component={CadastroEncomenda}
                />
                <Route
                    path="/cadastrar_entregador"
                    component={CadastroEntregador}
                />
                <Route
                    path="/cadastrar_destinatario"
                    component={CadastroDestinatario}
                />
            </Switch>
        </BrowserRouter>
    );
}
