import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

import api from '../../services/api';
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { Label } from '../../components/Form';
import { FlatList, ListHeader, ListItem } from '../../components/FlatList';
import ModalContextOptions from '../../components/ModalContextOptions';

function GerenciaProblemas() {
    const [showProblema, setShowProblema] = useState(false);
    const [problemaList, setProblemaList] = useState([]);
    const handleCloseProblema = (e) => {
        e.preventDefault();
        setShowProblema(false);
    };

    async function fetchData() {
        const res = await api.get('/problemas');
        // console.log(res);
        if (res.data) {
            setProblemaList([...res.data]);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const actionItemTextList = ['Visualizar', 'Cancelar encomendas'];
    function handleActionClick(index, _, data) {
        // console.log(index);

        switch (index) {
            case 0: {
                alert('Visualizar');
                setShowProblema(true);
                break;
            }
            case 1: {
                alert('Cancelar');
                break;
            }
            default: {
                throw new Error('Opção inválida');
            }
        }
    }

    const headerTextList = ['Encomendas', 'Problema', 'Ações'];
    const showEmptyList = problemaList.length === 0;

    return (
        <>
            <Header />
            <Container>
                <HeaderTitle>Problemas na entrega</HeaderTitle>
                <FlatList>
                    <ListHeader>
                        {headerTextList.map((headerItem) => (
                            <li key={headerItem}>{headerItem}</li>
                        ))}
                    </ListHeader>
                    {showEmptyList && (
                        <ListItem>Não há dados cadastrados</ListItem>
                    )}
                    {problemaList.map((problema) => (
                        <ListItem key={problema.id}>
                            <span key={problema.id}>{problema.id}</span>
                            <span>{problema.descricao}</span>
                            <ModalContextOptions
                                actionItemTextList={actionItemTextList}
                                onClick={(action, index) =>
                                    handleActionClick(action, index, problema)
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
