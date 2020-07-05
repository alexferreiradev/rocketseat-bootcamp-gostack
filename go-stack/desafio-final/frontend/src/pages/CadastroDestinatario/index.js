import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { Form, Label, Input } from '../../components/Form';
import api from '../../services/api';

function CadastroDestinatario() {
    const history = useHistory();
    const { id } = useParams();
    const editing = !!id;
    const headerFunctionText = editing ? 'Edição' : 'Cadastro';
    const [destinatario, setDestinatario] = useState({
        nome: '',
        endereco: '',
        numero: '',
        complemento: '',
        cidade: '',
        estado: '',
        cep: '',
    });

    async function fetchEditingData() {
        const res = await api.get(`/destinatarios/${id}`);
        if (res.data) {
            setDestinatario({ ...res.data });
        }
    }

    useEffect(() => {
        if (editing) {
            fetchEditingData();
        }
    }, [id]);

    function handleBack() {
        history.goBack();
    }

    async function handleSave(data) {
        const newData = {
            ...data,
        };
        let res;
        if (editing) {
            res = await api.put(`/destinatarios/${id}`, newData);
        } else {
            res = await api.post('/destinatarios', newData);
        }

        const resConst = { ...res };
        if (resConst.status === 201 || (editing && resConst.status === 200)) {
            history.push('/destinatarios');
        }
    }

    const itemDataMap = new Map();
    itemDataMap.set('ID', '123');

    return (
        <>
            <Header />
            <Container>
                <HeaderTitle>{headerFunctionText} de destinatário</HeaderTitle>
                <button type="button" onClick={handleBack}>
                    Voltar
                </button>
                <Form initialData={destinatario} onSubmit={handleSave}>
                    <button type="submit">Salvar</button>
                    <Label>Nome</Label>
                    <Input name="nome" type="text" placeholder="Seu nome" />
                    <Label>Rua</Label>
                    <Input name="endereco" type="text" placeholder="Seu rua" />
                    <Label>Numero</Label>
                    <Input
                        name="numero"
                        type="number"
                        placeholder="Seu numero"
                    />
                    <Label>Complemento</Label>
                    <Input
                        name="complemento"
                        type="text"
                        placeholder="Seu complemento"
                    />
                    <Label>Cidade</Label>
                    <Input name="cidade" type="text" placeholder="Seu cidade" />
                    <Label>Estado</Label>
                    <Input name="estado" type="text" placeholder="Seu estado" />
                    <Label>CEP</Label>
                    <Input name="cep" type="text" placeholder="00000-000" />
                </Form>
            </Container>
        </>
    );
}

export default CadastroDestinatario;
