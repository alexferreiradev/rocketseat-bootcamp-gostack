import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

import { PesquizarInput, CadastrarBt } from './styles';

import Header from '../../components/Header';
import HeaderTitle, { HeaderOptions } from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { Label } from '../../components/Form';
import { FlatList, ListHeader, ListItem } from '../../components/FlatList';
import ModalContextOptions from '../../components/ModalContextOptions';

function GerenciaEncomenda() {
    const [searchText, setSearchText] = useState('');
    const [showSignature, setShowSignature] = useState(false);

    function handleCloseSignature() {
        setShowSignature(false);
    }

    function handleOnChange(e) {
        // console.log(e.target.value);
        setSearchText(e.target.value);
        // Buscar dados na api
    }

    function handleActionClick(action, index) {
        // console.log(action, index);
    }

    const dataRowList = [['1', 'src/foto', 'Nome', 'exemple']];
    const headerTextList = ['ID', 'Foto', 'Nome', 'Email', 'Ações'];
    const actionItemTextList = ['Visualizar', 'Editar', 'Excluir'];

    return (
        <>
            <Header />
            <Container>
                <HeaderTitle>Gerenciando encomendas</HeaderTitle>
                <HeaderOptions>
                    <PesquizarInput
                        type="text"
                        placeholder="Buscar por encomendas"
                        value={searchText}
                        onChange={(e) => handleOnChange(e)}
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
