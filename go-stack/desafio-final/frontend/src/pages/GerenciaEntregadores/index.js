import React from 'react';
import { FaPlus } from 'react-icons/fa';

import { PesquizarInput, CadastrarBt } from './styles';

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import FlatList from '../../components/FlatList';
import Container from '../../components/Container';

function GerenciaEntregadores() {
    const handleOnChange = (e) => {
        e.preventDefault();
    };

    const itemDataMap = new Map();
    itemDataMap.set('ID', '123');

    const itemDataList = [itemDataMap];
    const actionItemListenerList = [];

    return (
        <>
            <Header />
            <Container>
                <HeaderTitle>Gerenciando Entregadores</HeaderTitle>
                <PesquizarInput
                    type="text"
                    placeholder="Buscar por entregadores"
                    onChange={(e) => handleOnChange(e)}
                />
                <CadastrarBt>
                    <FaPlus color="#FFF" size={14} />
                </CadastrarBt>
                <FlatList
                    headerTextList={['ID', 'Foto', 'Nome', 'Email', 'Ações']}
                    itemDataList={itemDataList}
                    actionItemTextList={['Visualizar', 'Editar', 'Excluir']}
                    actionItemListenerList={actionItemListenerList}
                />
            </Container>
        </>
    );
}

export default GerenciaEntregadores;
