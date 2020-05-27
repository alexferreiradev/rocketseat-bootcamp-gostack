import React, { Component } from 'react';

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';
import { Container, Form, SubmitButton, List } from './styles';

class Main extends Component {
    state = {
        newRepo: '',
        repositories: [],
        loading: false,
    };

    componentDidMount() {
        const repositories = localStorage.getItem('repositories');
        if (repositories) {
            this.setState({ repositories: JSON.parse(repositories) });
        }
    }

    componentDidUpdate(_, prevState) {
        const { repositories } = this.state;

        if (prevState.repositories !== repositories) {
            localStorage.setItem('repositories', JSON.stringify(repositories));
        }
    }

    handleOnChange = (e) => {
        e.preventDefault();

        this.setState({ newRepo: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({ loading: true });

        const { newRepo, repositories } = this.state;
        const response = await api.get(`/repos/${newRepo}`);
        const data = {
            name: response.data.full_name,
            id: response.data.id,
            url: response.data.html_url,
        };

        this.setState({
            repositories: [...repositories, data],
            newRepo: '',
            loading: false,
        });
    };

    render() {
        const { newRepo, loading, repositories } = this.state;
        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    Repositorios
                </h1>
                <Form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Adicionar repositorio"
                        value={newRepo}
                        onChange={this.handleOnChange}
                    />

                    <SubmitButton loading={loading}>
                        {loading ? (
                            <FaSpinner color="#FFF" size={14} />
                        ) : (
                            <FaPlus color="#FFF" size={14} />
                        )}
                    </SubmitButton>
                </Form>

                <List>
                    {repositories.map((repository) => (
                        <li key={repository.id}>
                            <span>{repository.name}</span>
                            <a href={repository.url}>Detalhes</a>
                        </li>
                    ))}
                </List>
            </Container>
        );
    }
}

export default Main;
