import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { Form, Label, Input, WrapInput } from '../../components/Form';
import api from '../../services/api';

function CadastroEncomenda() {
    const history = useHistory();
    const { id } = useParams();
    // console.log('id: ', id, useParams());

    const [encomenda, setEncomenda] = useState({
        nomeProduto: '',
        entregadorId: undefined,
        destinatarioId: undefined,
    });
    const editing = !!id;
    const headerFunctionText = editing ? 'Edição' : 'Cadastro';

    async function fetchEditingData() {
        const res = await api.get(`/encomendas/${id}`);
        if (res.data) {
            setEncomenda({ ...res.data });
        }
    }

    useEffect(() => {
        if (editing) {
            fetchEditingData();
        }
    }, [id]);

    async function handleSave(data) {
        const newData = {
            ...data,
        };
        let res;
        if (editing) {
            res = await api.put(`/encomendas${id}`, newData);
        } else {
            res = await api.post('/encomendas', newData);
        }

        const resConst = { ...res };
        if (resConst.status === 201 || (editing && resConst.status === 200)) {
            history.push('/encomendas');
        }
    }
    const entregadorList = ['1 - entregador'];

    return (
        <>
            <Header />
            <Container>
                <HeaderTitle>{headerFunctionText} de Encomendas</HeaderTitle>
                <Link to="/encomendas">Voltar</Link>
                <Form initialData={encomenda} onSubmit={handleSave}>
                    <button type="submit">Salvar</button>
                    <WrapInput>
                        <Label>Destinatário</Label>
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic-destinatario"
                            >
                                Escolha seu destinatário
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {entregadorList.map((destinatario) => (
                                    <Dropdown.Item href={`#/${destinatario}`}>
                                        {`${destinatario.id}-${destinatario.nome}`}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </WrapInput>
                    <WrapInput>
                        <Label>Entregador</Label>
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic-entregador"
                            >
                                Escolha seu entregador
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {entregadorList.map((entregador) => (
                                    <Dropdown.Item href={`#/${entregador}`}>
                                        {`${entregador.id}-${entregador.nome}`}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </WrapInput>
                    <WrapInput>
                        <Label>Nome do produto</Label>
                        <Input name="nomeProduto" placeholder="Seu produto" />
                    </WrapInput>
                </Form>
            </Container>
        </>
    );
}

export default CadastroEncomenda;
