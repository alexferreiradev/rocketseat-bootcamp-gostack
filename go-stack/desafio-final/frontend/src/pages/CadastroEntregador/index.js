import React, { useState } from 'react';
import { FaAdjust } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { SelecaoFoto } from './styles';

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { Form, Label, Input } from '../../components/Form';
import api from '../../services/api';

function CadastroEntregador() {
    const history = useHistory();

    const [entregador] = useState({ nome: '', email: '' });
    function handleBack() {
        history.goBack();
    }

    async function handleSave(data) {
        const entregadorNew = {
            ...data,
        };
        const res = await api.post('/entregadores', entregadorNew);
        if (res.status === 201) {
            history.push('/entregadores');
        }
    }
    const editing = false;
    const headerFunctionText = editing ? 'Edição' : 'Cadastro';

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
