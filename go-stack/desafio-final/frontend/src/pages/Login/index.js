import React from 'react';
import { useHistory } from 'react-router-dom';

import { Background, Logo, LogoText, SubmitButton } from './styles';
import { Form, Label, Input } from '../../components/Form';
import Container from '../../components/Container';

function Login() {
    const history = useHistory();
    function handleEmailChange() {}
    function handleSenhaChange() {}
    function handleLogin() {
        history.push('/gerencia_encomendas');
    }
    const email = '';
    const senha = '';
    return (
        <Background>
            <Container>
                <Logo />
                <LogoText>fastfeet</LogoText>
                <Form onSubmit={handleLogin}>
                    <Label>Seu E-mail</Label>
                    <Input
                        type="text"
                        placeholder="exemple@dominio.com"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <Label>Sua senha</Label>
                    <Input
                        type="password"
                        placeholder="Sua senha"
                        value={senha}
                        onChange={handleSenhaChange}
                    />

                    <SubmitButton>
                        <span>Entrar no sistema</span>
                    </SubmitButton>
                </Form>
            </Container>
        </Background>
    );
}

export default Login;
