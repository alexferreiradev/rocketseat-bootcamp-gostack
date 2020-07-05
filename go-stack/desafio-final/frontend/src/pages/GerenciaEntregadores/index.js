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

function GerenciaEntregadores() {
    const history = useHistory();
    const [searchText, setSearchText] = useState('');
    const [entregadorList, setEntregadorList] = useState([]);

    function processListData(res) {
        if (res.data) {
            setEntregadorList([...res.data]);
        }
    }

    async function fetchData() {
        const res = await api.get('/entregadores');
        // console.log(res);
        processListData(res);
    }

    useEffect(() => {
        fetchData();
    }, []);

    async function handleOnChangeSearchText(e) {
        console.log(e.target.value);
        const { value } = e.target;
        console.log(searchText.length, value.length);
        if (value.length > 2) {
            const res = await api.get(`/entregadores?q=${value}`);
            console.log(res);
            processListData(res);
        } else if (value.length === 0) {
            fetchData();
        } else {
            setEntregadorList([]);
        }
        setSearchText(value);
    }

    async function handleDelete({ id }) {
        const res = await api.delete(`/entregadores/${id}`);
        if (res.status === 200) {
            fetchData();
        }
    }

    const actionItemTextList = ['Editar', 'Excluir'];
    function handleActionClick(index, _, data) {
        // console.log(index);

        switch (index) {
            case 0: {
                history.push('/cadastrar_entregador');
                break;
            }
            case 1: {
                alert('Excluir');
                handleDelete(data);
                break;
            }
            default: {
                throw new Error('Opção inválida');
            }
        }
    }

    const headerTextList = ['ID', 'Foto', 'Nome', 'Email', 'Ações'];
    const showEmptyList = entregadorList.length === 0;

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
                        onChange={(e) => handleOnChangeSearchText(e)}
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
                            <li key={headerItem}>{headerItem}</li>
                        ))}
                    </ListHeader>
                    {showEmptyList && (
                        <ListItem>Não há dados cadastrados</ListItem>
                    )}
                    {entregadorList.map((entregador) => (
                        <ListItem key={entregador.id}>
                            <span key={entregador.id}>{entregador.id}</span>
                            <span>{entregador.foto}</span>
                            <span>{entregador.nome}</span>
                            <span>{entregador.email}</span>
                            <ModalContextOptions
                                actionItemTextList={actionItemTextList}
                                onClick={(action, index) =>
                                    handleActionClick(action, index, entregador)
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
