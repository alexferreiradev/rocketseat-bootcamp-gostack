import React from 'react';
import { Modal } from 'react-bootstrap';

import { Background } from './styles';

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import FlatList from '../../components/FlatList';
import Container from '../../components/Container';
import { Label } from '../../components/Form';

function GerenciaProblemas() {
    const handleCloseProblema = (e) => {
        e.preventDefault();
    };

    const itemDataMap = new Map();
    itemDataMap.set('ID', '123');

    const itemDataList = [itemDataMap];
    const actionItemListenerList = [];
    const showProblema = true;

    return (
        <Background>
            <Container>
                <Header />
                <HeaderTitle>Problemas na entrega</HeaderTitle>
                <FlatList
                    headerTextList={['Encomendas', 'Problema', 'Ações']}
                    itemDataList={itemDataList}
                    actionItemTextList={['Visualizar', 'Cancelar encomendas']}
                    actionItemListenerList={actionItemListenerList}
                />
                <Modal
                    show={showProblema}
                    onHide={handleCloseProblema}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body>
                        <Label>Visualizar Problema</Label>
                        <p>Descricao do problema</p>
                    </Modal.Body>
                </Modal>
            </Container>
        </Background>
    );
}

export default GerenciaProblemas;
