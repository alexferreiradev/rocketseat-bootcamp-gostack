import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Logo, Menu, UserConfigs, SairBt } from './styles';

import { doLogoutReq } from '../../store/modules/user/actions';

function Header({ userName, menuAtivo }) {
    const dispatch = useDispatch();

    function handleExit() {
        dispatch(doLogoutReq());
    }
    return (
        <Container>
            <Logo />
            <Menu>
                <li>
                    <Link to="/encomendas">Encomendas</Link>
                </li>
                <li>
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
                <SairBt onClick={handleExit}>Sair do sistema</SairBt>
            </UserConfigs>
        </Container>
    );
}

export default Header;
