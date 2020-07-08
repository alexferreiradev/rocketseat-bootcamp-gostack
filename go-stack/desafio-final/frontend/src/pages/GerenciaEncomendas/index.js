import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

import {
    PesquizarInput,
    CadastrarBt,
    EntregadorField,
    EntregadorImg,
    ImageAssinatura,
    ModalHeader,
    ModalBody,
} from './styles';

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
    const [encomendaSelected, setEncomendaSelected] = useState({});
    const [encomendaList, setEncomendaList] = useState([]);

    const history = useHistory();
    function processListData(res) {
        if (res.data.rows) {
            const formattedData = res.data.rows.map((row) => {
                let formattedStatus;
                if (row.canceled_at) {
                    formattedStatus = 'cancelada';
                } else if (row.start_date) {
                    if (row.end_date) {
                        formattedStatus = 'entregue';
                    } else {
                        formattedStatus = 'retirada';
                    }
                } else {
                    formattedStatus = 'pendente';
                }

                const data = {
                    ...row,
                    status: formattedStatus,
                };

                return data;
            });
            setEncomendaList([...formattedData]);
        }
    }

    async function fetchData() {
        const res = await api.get('/encomendas');
        // console.log(res);
        processListData(res);
    }

    function handleCloseSignature() {
        setShowSignature(false);
        setEncomendaSelected({});
    }

    async function handleOnChangeSearchText(e) {
        console.log(e.target.value);
        const { value } = e.target;
        console.log(searchText.length, value.length);
        if (value.length > 0) {
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
                // alert(`Visualizar${data.id}`);
                setShowSignature(true);
                setEncomendaSelected(data);
                break;
            }
            case 1: {
                // alert(`Edit - ${data.id}`);
                history.push(`/cadastrar_encomenda/${data.id}/`);
                break;
            }
            case 2: {
                // alert('Excluir');
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
                            <span>#{encomenda.id}</span>
                            <span>{encomenda.destinatario.nome}</span>
                            <EntregadorField>
                                <EntregadorImg
                                    src={encomenda.entregador.avatar.url || ''}
                                />
                                <span>{encomenda.entregador.name}</span>
                            </EntregadorField>
                            <span>{encomenda.destinatario.cidade}</span>
                            <span>{encomenda.destinatario.estado}</span>
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
            </Container>
            {encomendaSelected.destinatario && (
                <Modal
                    show={showSignature}
                    onHide={handleCloseSignature}
                    size="md"
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <ModalHeader>
                        <Label>Informações encomenda</Label>
                        <span>
                            {encomendaSelected.destinatario.rua},
                            {encomendaSelected.destinatario.numero}
                        </span>
                        <span>
                            {encomendaSelected.destinatario.cidade}-
                            {encomendaSelected.destinatario.estado}
                        </span>
                        <span>{encomendaSelected.destinatario.cep}</span>
                    </ModalHeader>
                    <ModalBody>
                        <Label>Datas</Label>
                        <Label>Retirada:</Label>
                        <span>{encomendaSelected.start_date}</span>
                        <Label>Entrega:</Label>
                        <span>{encomendaSelected.end_date}</span>
                    </ModalBody>
                    <Modal.Footer>
                        <Label>Assinatura do destinatário:</Label>
                        {encomendaSelected.signature && (
                            <ImageAssinatura
                                src={
                                    encomendaSelected.signature.url
                                        ? encomendaSelected.signature.url
                                        : ''
                                }
                            />
                        )}
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
}

export default GerenciaEncomenda;
