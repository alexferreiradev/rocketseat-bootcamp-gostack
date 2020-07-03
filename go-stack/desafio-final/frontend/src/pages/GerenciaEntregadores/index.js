import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

import { PesquizarInput, CadastrarBt } from './styles';

import Header from '../../components/Header';
import HeaderTitle, { HeaderOptions } from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { FlatList, ListHeader, ListItem } from '../../components/FlatList';
import ModalContextOptions from '../../components/ModalContextOptions';

function GerenciaEntregadores() {
    const [searchText, setSearchText] = useState('');

    function handleOnChange(e) {
        e.preventDefault();
        // console.log(e.target.value);
        setSearchText(e.target.value);
        // Buscar dados na api
    }

    function handleActionClick(action, index) {
        // console.log(action, index);
    }

    const dataRowList = [['1', 'src/foto', 'Nome', 'exemple']];
    const headerTextList = ['ID', 'Foto', 'Nome', 'Email', 'Ações'];
    const actionItemTextList = ['Editar', 'Excluir'];

    return (
        <>
            <Header />
            <Container>
                <HeaderTitle>Gerenciando Entregadores</HeaderTitle>
                <HeaderOptions>
                    <PesquizarInput
                        type="text"
                        placeholder="Buscar por entregadores"
                        value={searchText}
                        onChange={(e) => handleOnChange(e)}
                    />
                    <CadastrarBt>
                        <Link to="/cadastrar_entregador">
                            <FaPlus color="#FFF" size={14} />
                            Cadastrar
                        </Link>
                    </CadastrarBt>
                </HeaderOptions>
                <FlatList>
                    <ListHeader>
                        {headerTextList.map((headerItem) => (
                            <span key={headerItem}>{headerItem}</span>
                        ))}
                    </ListHeader>
                    {dataRowList.map((rowData) => (
                        <ListItem key={rowData[0]}>
                            {rowData.map((rowField) => (
                                <span key={rowField}>{rowField}</span>
                            ))}
                            <ModalContextOptions
                                actionItemTextList={actionItemTextList}
                                onClick={(action, index) =>
                                    handleActionClick(action, index)
                                }
                            />
                        </ListItem>
                    ))}
                </FlatList>
            </Container>
        </>
    );
}

export default GerenciaEntregadores;
