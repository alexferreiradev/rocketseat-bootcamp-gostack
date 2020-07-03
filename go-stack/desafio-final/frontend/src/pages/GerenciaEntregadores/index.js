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

function GerenciaEntregadores() {
    const [searchText, setSearchText] = useState('');
    const [entregadorList, setEntregadorList] = useState([]);

    async function fetchData() {
        const res = await api.get('/entregadores');
        // console.log(res);
        if (res.data) {
            setEntregadorList([...res.data]);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    function handleOnChange(e) {
        e.preventDefault();
        // console.log(e.target.value);
        setSearchText(e.target.value);
        // Buscar dados na api
    }

    function handleActionClick(index, _) {
        // console.log(index);

        switch (index) {
            case 0: {
                alert('Visualizar');
                break;
            }
            case 1: {
                alert('Edit');
                break;
            }
            case 2: {
                alert('Excluir');
                break;
            }
            default: {
                throw new Error('Opção inválida');
            }
        }
    }

    const headerTextList = ['ID', 'Foto', 'Nome', 'Email', 'Ações'];
    const actionItemTextList = ['Editar', 'Excluir'];
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
