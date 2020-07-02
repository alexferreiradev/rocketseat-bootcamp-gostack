import React from 'react';
import { FaAdjust } from 'react-icons/fa';

import {
    PesquizarInput,
    CadastrarBt,
    FlatList,
    ListHeader,
    ListItem,
} from './styles';

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import Container from '../../components/Container';

function GerenciaDestinatario() {
    const handleOnChange = () => {};

    return (
        <>
            <Header />
            <Container>
                <HeaderTitle>Gerenciando Destinatários</HeaderTitle>
                <PesquizarInput
                    type="text"
                    placeholder="Buscar por destinatário"
                    onChange={handleOnChange}
                />
                <CadastrarBt>
                    <FaAdjust />
                    <span>Cadastrar</span>
                </CadastrarBt>
                <FlatList>
                    <ListHeader>
                        <li>ID</li>
                        <li>Nome</li>
                        <li>Endereço</li>
                        <li>Ações</li>
                    </ListHeader>
                    <ListItem>
                        <li>#01</li>
                        <li>Nome do destinatário</li>
                        <li>Av T-63, n1234, Goiânia-Goiás</li>
                        <li>
                            <FaAdjust />
                        </li>
                    </ListItem>
                </FlatList>
            </Container>
        </>
    );
}

export default GerenciaDestinatario;
