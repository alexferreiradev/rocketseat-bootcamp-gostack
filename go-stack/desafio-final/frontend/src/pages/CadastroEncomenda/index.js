import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import Container from '../../components/Container';
import { Form, Label, Input, WrapInput } from '../../components/Form';
import api from '../../services/api';

function CadastroEncomenda() {
    const history = useHistory();
    const [nomeProduto, setNomeProduto] = useState('');
    const editing = false;
    const headerFunctionText = editing ? 'Edição' : 'Cadastro';

    async function handleSave(e) {
        e.preventDefault();
        const encomenda = {
            destinatario: '',
        };
        const res = api.post('/encomenda', encomenda);
        if (res.status === 201) {
            history.push('/encomendas');
        }
    }
    const entregadorList = ['1 - entregador'];

    return (
        <>
            <Header />
            <Container>
                <HeaderTitle>{headerFunctionText} de Encomendas</HeaderTitle>
                <Link to="/encomendas">Voltar</Link>
                <button type="submit" onClick={(e) => handleSave(e)}>
                    Salvar
                </button>
                <Form onSubmit={handleSave}>
                    <WrapInput>
                        <Label>Destinatário</Label>
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                            >
                                Escolha seu destinatário
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {entregadorList.map((destinatario) => (
                                    <Dropdown.Item href={`#/${destinatario}`}>
                                        {`${destinatario.id}-${destinatario.nome}`}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
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
                                        {`${entregador.id}-${entregador.nome}`}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </WrapInput>
                    <WrapInput>
                        <Label>Nome do produto</Label>
                        <Input
                            placeholder="Seu produto"
                            value={nomeProduto}
                            onChange={(e) => {
                                const { value } = e.target;
                                setNomeProduto(value);
                            }}
                        />
                    </WrapInput>
                </Form>
            </Container>
        </>
    );
}

export default CadastroEncomenda;
