import React from 'react';

import { Container, Logo, Menu, UserConfigs, SairBt } from './styles';

function Header() {
    return (
        <Container>
            <Logo />
            <Menu>
                <li>Encomendas</li>
                <li>Entregadores</li>
                <li>Destinatários</li>
                <li>Problemas</li>
            </Menu>
            <UserConfigs>
                <span>Nome user</span>
                <SairBt />
            </UserConfigs>
        </Container>
    );
}

export default Header;
