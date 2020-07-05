import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

import { PesquizarInput, CadastrarBt } from './styles';

import api from '../../services/api';
import Header from '../../components/Header';
import HeaderTitle, { HeaderOptions } from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { Label } from '../../components/Form';
import { FlatList, ListHeader, ListItem } from '../../components/FlatList';
import ModalContextOptions from '../../components/ModalContextOptions';

function GerenciaEncomenda() {
    const [searchText, setSearchText] = useState('');
    const [showSignature, setShowSignature] = useState(false);
    const [encomendaList, setEncomendaList] = useState([]);

    const history = useHistory();
    function processListData(res) {
        if (res.data) {
            setEncomendaList([...res.data]);
        }
    }

    async function fetchData() {
        const res = await api.get('/encomendas');
        // console.log(res);
        processListData(res);
    }

    function handleCloseSignature() {
        setShowSignature(false);
    }

    async function handleOnChangeSearchText(e) {
        console.log(e.target.value);
        const { value } = e.target;
        console.log(searchText.length, value.length);
        if (value.length > 2) {
            const res = await api.get(`/encomendas?q=${value}`);
            console.log(res);
            processListData(res);
        } else if (value.length === 0) {
            fetchData();
        } else {
            setEncomendaList([]);
        }
        setSearchText(value);
    }

    async function handleDelete({ id }) {
        const res = await api.delete(`/encomendas/${id}`);
        if (res.status === 200) {
            fetchData();
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const actionItemTextList = ['Visualizar', 'Editar', 'Excluir'];
    function handleActionClick(index, action, data) {
        // console.log(index);

        switch (index) {
            case 0: {
                alert(`Visualizar${data.id}`);
                setShowSignature(true);
                break;
            }
            case 1: {
                alert(`Edit - ${data.id}`);
                history.push(`/cadastrar_encomenda/${data.id}/`);
                break;
            }
            case 2: {
                alert('Excluir');
                handleDelete(data);
                break;
            }
            default: {
                throw new Error('Opção inválida');
            }
        }
    }

    const headerTextList = [
        'ID',
        'Destinatario',
        'Entregador',
        'Cidade',
        'Estado',
        'Status',
        'Ações',
    ];
    const showEmptyList = encomendaList.length === 0;

    return (
        <>
            <Header />
            <Container>
                <HeaderTitle>Gerenciando encomendas</HeaderTitle>
                <HeaderOptions>
                    <PesquizarInput
                        type="text"
                        placeholder="Buscar por encomendas com pelo menos 3 letras"
                        value={searchText}
                        onChange={(e) => handleOnChangeSearchText(e)}
                    />
                    <CadastrarBt>
                        <Link to="/cadastrar_encomenda">
                            <FaPlus />
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
                    {encomendaList.map((encomenda) => (
                        <ListItem key={encomenda.id}>
                            <span>{encomenda.id}</span>
                            <span>{encomenda.destinatario}</span>
                            <span>{encomenda.entregador}</span>
                            <span>{encomenda.cidade}</span>
                            <span>{encomenda.estado}</span>
                            <span>{encomenda.status}</span>
                            <ModalContextOptions
                                actionItemTextList={actionItemTextList}
                                onClick={(index, action) =>
                                    handleActionClick(index, action, encomenda)
                                }
                            />
                        </ListItem>
                    ))}
                </FlatList>
                <Modal
                    show={showSignature}
                    onHide={handleCloseSignature}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Label>Informações encomenda</Label>
                        <span>Rua</span>
                        <span>Cidade-estado</span>
                        <span>CEP</span>
                    </Modal.Header>
                    <Modal.Body>
                        <Label>Datas</Label>
                        <Label>Retirada:</Label>
                        <span>00/00/00</span>
                        <Label>Entrega:</Label>
                        <span>00/00/00</span>
                    </Modal.Body>
                    <Modal.Footer>
                        <Label>Assinatura do destinatário:</Label>
                        <FaPlus />
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    );
}

export default GerenciaEncomenda;
