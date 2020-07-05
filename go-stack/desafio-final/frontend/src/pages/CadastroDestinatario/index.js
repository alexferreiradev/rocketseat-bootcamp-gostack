import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { Form, Label, Input } from '../../components/Form';
import api from '../../services/api';

function CadastroDestinatario() {
    const history = useHistory();
    const [destinatario] = useState({
        nome: '',
        endereco: '',
        numero: '',
        complemento: '',
        cidade: '',
        estado: '',
        cep: '',
    });

    function handleBack() {
        history.goBack();
    }

    async function handleSave(data) {
        const entregador = {
            ...data,
        };
        const res = await api.post('/destinatarios', entregador);
        if (res.status === 201) {
            history.push('/destinatarios');
        }
    }
    const editing = true;

    const itemDataMap = new Map();
    itemDataMap.set('ID', '123');

    return (
        <>
            <Header />
            <Container>
                {editing ? (
                    <HeaderTitle>Edição Destinatário</HeaderTitle>
                ) : (
                    <HeaderTitle>Cadastro de Destinatário</HeaderTitle>
                )}
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
