import React from 'react';
import { Dropdown } from 'react-bootstrap';

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { Form, Label, Input, WrapInput } from '../../components/Form';

function CadastroEncomenda() {
    const editing = true;
    const headerFunctionText = editing ? 'Edição' : 'Cadastro';

    const entregadorList = ['1 - entregador'];

    return (
        <>
            <Header />
            <Container>
                <HeaderTitle>{headerFunctionText} de Encomendas</HeaderTitle>
                <button type="submit">Voltar</button>
                <button type="submit">Salvar</button>
                <Form>
                    <WrapInput>
                        <Label>Destinatário</Label>
                        <Input placeholder="Seu destinatário" />
                    </WrapInput>
                    <WrapInput>
                        <Label>Entregador</Label>
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                            >
                                Escolha seu entregador
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {entregadorList.map((entregador) => (
                                    <Dropdown.Item href={`#/${entregador}`}>
                                        {entregador}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </WrapInput>
                    <WrapInput>
                        <Label>Nome do produto</Label>
                        <Input placeholder="Seu produto" />
                    </WrapInput>
                </Form>
            </Container>
        </>
    );
}

export default CadastroEncomenda;
