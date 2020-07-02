import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Background } from './styles';

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { Form, Label, Input } from '../../components/Form';

function CadastroEncomenda() {
    const editing = true;
    const headerFunctionText = editing ? 'Edição' : 'Cadastro';

    const entregadorList = ['1 - entregador'];

    return (
        <Background>
            <Container>
                <Header />
                <HeaderTitle>`${headerFunctionText} de Encomendas`</HeaderTitle>
                <button type="submit">Voltar</button>
                <button type="submit">Salvar</button>
                <Form>
                    <Label>Destinatário</Label>
                    <Input placeholder="Seu destinatário" />
                    <Label>Entregador</Label>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
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
                    <Label>Nome do produto</Label>
                    <Input placeholder="Seu produto" />
                </Form>
            </Container>
        </Background>
    );
}

export default CadastroEncomenda;
