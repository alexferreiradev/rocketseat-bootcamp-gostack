import React from 'react';

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { Form, Label, Input } from '../../components/Form';

function CadastroDestinatario() {
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
                <button type="submit">Voltar</button>
                <button type="submit">Salvar</button>
                <Form>
                    <Label>Nome</Label>
                    <Input placeholder="Seu nome" />
                    <Label>Rua</Label>
                    <Input placeholder="Seu rua" />
                    <Label>Numero</Label>
                    <Input placeholder="Seu numero" />
                    <Label>Complemento</Label>
                    <Input placeholder="Seu complemento" />
                    <Label>Cidade</Label>
                    <Input placeholder="Seu cidade" />
                    <Label>Estado</Label>
                    <Input placeholder="Seu estado" />
                    <Label>CEP</Label>
                    <Input placeholder="00000-000" />
                </Form>
            </Container>
        </>
    );
}

export default CadastroDestinatario;
