import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { Label } from '../../components/Form';
import { FlatList, ListHeader, ListItem } from '../../components/FlatList';
import ModalContextOptions from '../../components/ModalContextOptions';

function GerenciaProblemas() {
    const [showProblema, setShowProblema] = useState(false);
    const handleCloseProblema = (e) => {
        e.preventDefault();
        setShowProblema(false);
    };

    function handleActionClick(action, index) {
        // console.log(action, index);
    }

    const dataRowList = [['1', 'Problema descrito muito grande']];
    const headerTextList = ['Encomendas', 'Problema', 'Ações'];
    const actionItemTextList = ['Visualizar', 'Cancelar encomendas'];

    return (
        <>
            <Header />
            <Container>
                <HeaderTitle>Problemas na entrega</HeaderTitle>
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
        </>
    );
}

export default GerenciaProblemas;
