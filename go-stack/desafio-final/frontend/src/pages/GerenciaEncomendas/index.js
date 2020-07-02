import React from 'react';
import { Modal } from 'react-bootstrap';
import { FaAdjust } from 'react-icons/fa';

import {
    PesquizarInput,
    CadastrarBt,
    FlatList,
    ListHeader,
    ListItem,
} from './styles';

import Header from '../../components/Header';
import HeaderTitle, { HeaderOptions } from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { Label } from '../../components/Form';

function GerenciaEncomenda() {
    const handleOnChange = () => {};
    const handleCloseSignature = () => {};

    const showSignature = false;

    return (
        <>
            <Header />
            <Container>
                <HeaderTitle>Gerenciando encomendas</HeaderTitle>
                <HeaderOptions>
                    <PesquizarInput
                        type="text"
                        placeholder="Buscar por encomendas"
                        onChange={handleOnChange}
                    />
                    <CadastrarBt>
                        <FaAdjust />
                        <span>Cadastrar</span>
                    </CadastrarBt>
                </HeaderOptions>
                <FlatList>
                    <ListHeader>
                        <li>ID</li>
                        <li>Destinatário</li>
                        <li>Entregador</li>
                        <li>Cidade</li>
                        <li>Estado</li>
                        <li>Status</li>
                        <li>Ações</li>
                    </ListHeader>
                    <ListItem>
                        <li>#01</li>
                        <li>Nome de Destinatário</li>
                        <li>Entregador</li>
                        <li>Goiania</li>
                        <li>Goias</li>
                        <li>Entregue</li>
                        <li>
                            <FaAdjust />
                        </li>
                    </ListItem>
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
                        <FaAdjust />
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    );
}

export default GerenciaEncomenda;
