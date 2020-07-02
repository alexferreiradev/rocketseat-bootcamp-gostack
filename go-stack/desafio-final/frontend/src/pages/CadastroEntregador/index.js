import React from 'react';
import { FaAdjust } from 'react-icons/fa';

import { SelecaoFoto } from './styles';

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { Form, Label, Input } from '../../components/Form';

function CadastroEntregador() {
    const editing = false;
    const headerFunctionText = editing ? 'Edição' : 'Cadastro';

    return (
        <>
            <Header />
            <Container>
                <HeaderTitle>`${headerFunctionText} de Entregador`</HeaderTitle>
                <button type="submit">Voltar</button>
                <button type="submit">Salvar</button>
                <Form>
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
                    <Input placeholder="Seu nome" />
                    <Label>Email</Label>
                    <Input placeholder="exemplo@dominio.com" />
                </Form>
            </Container>
        </>
    );
}

export default CadastroEntregador;
