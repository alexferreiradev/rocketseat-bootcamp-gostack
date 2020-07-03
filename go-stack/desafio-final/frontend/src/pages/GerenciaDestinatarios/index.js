import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

import { PesquizarInput, CadastrarBt } from './styles';

import Header from '../../components/Header';
import HeaderTitle, { HeaderOptions } from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { FlatList, ListHeader, ListItem } from '../../components/FlatList';
import ModalContextOptions from '../../components/ModalContextOptions';

function GerenciaDestinatario() {
    const handleOnChange = () => {};

    function handleActionClick(action, index) {
        // console.log(action, index);
    }

    const dataRowList = [
        ['1', 'Nome do cidadao', 'Rua teste Goiânia goias'],
        ['2', 'Nome do cidadao', 'Rua teste Goiânia goias'],
    ];
    const headerTextList = ['ID', 'Nome', 'Endereço', 'Ações'];
    const actionItemTextList = ['Editar', 'Excluir'];

    return (
        <>
            <Header />
            <Container>
                <HeaderTitle>Gerenciando Destinatários</HeaderTitle>
                <HeaderOptions>
                    <PesquizarInput
                        type="text"
                        placeholder="Buscar por destinatário"
                        onChange={handleOnChange}
                    />
                    <CadastrarBt>
                        <Link to="/cadastrar_destinatario">
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

export default GerenciaDestinatario;
