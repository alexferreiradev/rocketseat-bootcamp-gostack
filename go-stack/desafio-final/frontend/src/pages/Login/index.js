import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Background, Logo, LogoText, SubmitButton } from './styles';
import { Form, Label, Input } from '../../components/Form';
import Container from '../../components/Container';
import * as UserActions from '../../store/modules/user/actions';

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(ev) {
        ev.preventDefault();
        const { value: newValue } = ev.target;
        setEmail(newValue);
    }
    function handleSenhaChange(ev) {
        ev.preventDefault();
        const { value: newValue } = ev.target;
        setPassword(newValue);
    }
    function handleLogin() {
        // dispatch(UserActions.doLoginReq(email, password));
        history.push('/encomendas');
    }

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
                        onChange={(e) => handleEmailChange(e)}
                    />
                    <Label>Sua senha</Label>
                    <Input
                        type="password"
                        placeholder="Sua senha"
                        value={password}
                        onChange={(e) => handleSenhaChange(e)}
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
