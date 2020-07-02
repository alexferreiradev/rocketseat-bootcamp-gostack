import React from 'react';
import { FaAdjust } from 'react-icons/fa';

import { Background, SelecaoFoto } from './styles';

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { Form, Label, Input } from '../../components/Form';

function CadastroEntregador() {
    const editing = true;
    const headerFunctionText = editing ? 'Edição' : 'Cadastro';

    return (
        <Background>
            <Container>
                <Header />
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
        </Background>
    );
}

export default CadastroEntregador;
