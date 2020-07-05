import React, { useState, useEffect } from 'react';
import { FaAdjust } from 'react-icons/fa';
import { useHistory, useParams } from 'react-router-dom';

import { SelecaoFoto } from './styles';

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { Form, Label, Input } from '../../components/Form';
import api from '../../services/api';

function CadastroEntregador() {
    const history = useHistory();
    const { id } = useParams();

    const editing = !!id;
    const headerFunctionText = editing ? 'Edição' : 'Cadastro';

    const [entregador, setEntregador] = useState({ nome: '', email: '' });

    async function fetchEditingData() {
        const res = await api.get(`/entregadores/${id}`);
        if (res.data) {
            setEntregador({ ...res.data });
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
            res = await api.put(`/entregadores/${id}`, newData);
        } else {
            res = await api.post('/entregadores', newData);
        }

        const resConst = { ...res };
        if (resConst.status === 201 || (editing && resConst.status === 200)) {
            history.push('/entregadores');
        }
    }

    return (
        <>
            <Header />
            <Container>
                <HeaderTitle>`${headerFunctionText} de Entregador`</HeaderTitle>
                <button type="button" onClick={handleBack}>
                    Voltar
                </button>
                <Form initialData={entregador} onSubmit={handleSave}>
                    <button type="submit">Salvar</button>
                    <SelecaoFoto>
                        {editing ? (
                            <FaAdjust />
                        ) : (
                            <>
                                <FaAdjust />
                                <span>Adicionar Foto</span>
                            </>
                        )}
                    </SelecaoFoto>
                    <Label>Nome</Label>
                    <Input type="text" name="nome" placeholder="Seu nome" />
                    <Label>Email</Label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="exemplo@dominio.com"
                    />
                </Form>
            </Container>
        </>
    );
}

export default CadastroEntregador;
