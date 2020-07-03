import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

import { PesquizarInput, CadastrarBt } from './styles';

import api from '../../services/api';
import Header from '../../components/Header';
import HeaderTitle, { HeaderOptions } from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { FlatList, ListHeader, ListItem } from '../../components/FlatList';
import ModalContextOptions from '../../components/ModalContextOptions';

function GerenciaDestinatario() {
    const [destinatarioList, setDestinatarioList] = useState([]);

    async function fetchData() {
        const res = await api.get('/destinatarios');
        // console.log(res);
        if (res.data) {
            setDestinatarioList([...res.data]);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleOnChange = () => {};

    function handleActionClick(action, index) {
        // console.log(action, index);
    }

    const headerTextList = ['ID', 'Nome', 'Endereço', 'Ações'];
    const actionItemTextList = ['Editar', 'Excluir'];
    const showEmptyList = destinatarioList.length === 0;

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
                            <li key={headerItem}>{headerItem}</li>
                        ))}
                    </ListHeader>
                    {showEmptyList && (
                        <ListItem>Não há dados cadastrados</ListItem>
                    )}
                    {destinatarioList.map((destinatario) => (
                        <ListItem key={destinatario.id}>
                            <span>{destinatario.id}</span>
                            <span>{destinatario.nome}</span>
                            <span>{destinatario.endereco}</span>
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
