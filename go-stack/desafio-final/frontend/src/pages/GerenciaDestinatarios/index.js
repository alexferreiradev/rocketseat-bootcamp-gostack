import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

import { PesquizarInput, CadastrarBt } from './styles';

import api from '../../services/api';
import Header from '../../components/Header';
import HeaderTitle, { HeaderOptions } from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { FlatList, ListHeader, ListItem } from '../../components/FlatList';
import ModalContextOptions from '../../components/ModalContextOptions';

function GerenciaDestinatario() {
    const history = useHistory();
    const [searchText, setSearchText] = useState('');
    const [destinatarioList, setDestinatarioList] = useState([]);

    function processListData(res) {
        if (res.data.rows) {
            setDestinatarioList([...res.data.rows]);
        }
    }

    async function fetchData() {
        const res = await api.get('/destinatarios');
        // console.log(res);
        processListData(res);
    }

    useEffect(() => {
        fetchData();
    }, []);

    async function handleDelete({ id }) {
        const res = await api.delete(`/destinatarios/${id}`);
        if (res.status === 200) {
            fetchData();
        }
    }

    const actionItemTextList = ['Editar', 'Excluir'];
    function handleActionClick(index, action, data) {
        // console.log(index);
        // alert(action);

        switch (index) {
            case 0: {
                history.push(`/cadastrar_destinatario/${data.id}`);
                break;
            }
            case 1: {
                handleDelete(data);
                break;
            }
            default: {
                throw new Error('Opção inválida');
            }
        }
    }

    async function handleOnChangeSearchText(e) {
        console.log(e.target.value);
        const { value } = e.target;
        console.log(searchText.length, value.length);
        if (value.length > 2) {
            const res = await api.get(`/destinatarios?q=${value}`);
            console.log(res);
            processListData(res);
        } else if (value.length === 0) {
            fetchData();
        } else {
            setDestinatarioList([]);
        }
        setSearchText(value);
    }

    const headerTextList = ['ID', 'Nome', 'Endereço', 'Ações'];
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
                        value={searchText}
                        onChange={(e) => handleOnChangeSearchText(e)}
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
                                    handleActionClick(
                                        action,
                                        index,
                                        destinatario
                                    )
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
