import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import AsyncSelect from 'react-select/async';

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { Form, Label, Input, WrapInput } from '../../components/Form';
import api from '../../services/api';

function CadastroEncomenda() {
    const history = useHistory();
    const { id } = useParams();
    // console.log('id: ', id, useParams());

    const [entregadorList, setEntregadorList] = useState([]);
    const [destinatarioList, setDestinatarioList] = useState([]);
    const [entregador, setEntregador] = useState({});
    const [destinatario, setDestinatario] = useState({});
    const [encomenda, setEncomenda] = useState({
        nomeProduto: '',
        entregadorId: undefined,
        destinatarioId: undefined,
    });
    const editing = !!id;
    const headerFunctionText = editing ? 'Edição' : 'Cadastro';

    async function loadSubItens() {
        const resEntregador = await api.get(`/entregadores`);
        // console.log(resEntregador.data);
        if (resEntregador.data) {
            if (resEntregador.data.count > 0) {
                setEntregador(resEntregador.data.rows[0]);
            }
            setEntregadorList([...resEntregador.data.rows]);
        }
        const resDestinatario = await api.get(`/destinatarios`);
        // console.log(resDestinatario.data);
        if (resDestinatario.data) {
            if (resDestinatario.data.count > 0) {
                setDestinatario(resDestinatario.data.rows[0]);
            }
            setDestinatarioList([...resDestinatario.data.rows]);
        }
    }

    async function fetchEditingData() {
        const res = await api.get(`/encomendas/${id}`);
        if (res.data) {
            loadSubItens();
            setEncomenda({ ...res.data });
        }
    }

    useEffect(() => {
        if (editing) {
            fetchEditingData();
        } else {
            loadSubItens();
        }
    }, [id]);

    async function handleSave(data) {
        console.log('dados', data, 'ids: ', entregador, destinatario);
        const newData = {
            ...data,
            deliveryman_id: `${entregador.id}`,
            recipient_id: `${destinatario.id}`,
        };
        let res;
        if (editing) {
            res = await api.put(`/encomendas/${id}`, newData);
        } else {
            res = await api.post('/encomendas', newData);
        }

        const resConst = { ...res };
        if (resConst.status === 201 || (editing && resConst.status === 200)) {
            history.push('/encomendas');
        }
    }

    function destinatarioPromiseOptions() {
        return new Promise((resolve) => {
            resolve(
                destinatarioList.map((i) => ({
                    value: `${i.id}`,
                    label: `${i.id} - ${i.nome}`,
                }))
            );
        });
    }

    function entregadorPromiseOptions() {
        return new Promise((resolve) => {
            resolve(
                entregadorList.map((i) => ({
                    value: `${i.id}`,
                    label: `${i.id} - ${i.name}`,
                }))
            );
        });
    }

    function handleOnChangeEntregador({ value, ...rest }) {
        // console.log('entregador select: ', value, entregadorList);

        setEntregador(entregadorList.find((i) => i.id === value));
        return { value, rest };
    }

    function handleOnChangeDestinatario({ value, ...rest }) {
        // console.log('entregador select: ', value, entregadorList);

        setDestinatario(destinatarioList.find((i) => i.id === value));
        return { value, rest };
    }

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
                        {destinatarioList.length > 0 ? (
                            <AsyncSelect
                                defaultOptions
                                isSearchable={false}
                                loadOptions={destinatarioPromiseOptions}
                                onChange={handleOnChangeDestinatario}
                            />
                        ) : (
                            <span>Destinatários não encontrados</span>
                        )}
                        {/* <Dropdown>
                            <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic-destinatario"
                                value={destinatario}
                            >
                                Escolha seu destinatário
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {destinatarioList.map((destinatarioItem) => (
                                    <Dropdown.Item
                                        href={`#/${destinatarioItem}`}
                                    >
                                        {`${destinatarioItem.id}-${destinatarioItem.nome}`}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown> */}
                    </WrapInput>
                    <WrapInput>
                        <Label>Entregador</Label>
                        {entregadorList.length > 0 ? (
                            <AsyncSelect
                                defaultOptions
                                isSearchable={false}
                                loadOptions={entregadorPromiseOptions}
                                onChange={handleOnChangeEntregador}
                            />
                        ) : (
                            <span>Entregadores não encontrados</span>
                        )}
                    </WrapInput>
                    <WrapInput>
                        <Label>Nome do produto</Label>
                        <Input name="product" placeholder="Seu produto" />
                    </WrapInput>
                </Form>
            </Container>
        </>
    );
}

export default CadastroEncomenda;
