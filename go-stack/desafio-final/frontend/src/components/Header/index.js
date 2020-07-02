import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, Menu, UserConfigs, SairBt } from './styles';

function Header({ userName, menuAtivo }) {
    return (
        <Container>
            <Logo />
            <Menu>
                <li active>
                    <Link to="/encomendas">Encomendas</Link>
                </li>
                <li active={false}>
                    <Link to="/entregadores">Entregadores</Link>
                </li>
                <li>
                    <Link to="/destinatarios">Destinatários</Link>
                </li>
                <li>
                    <Link to="/problemas">Problemas</Link>
                </li>
            </Menu>
            <UserConfigs>
                <span>{userName}</span>
                <SairBt>Sair do sistema</SairBt>
            </UserConfigs>
        </Container>
    );
}

export default Header;
