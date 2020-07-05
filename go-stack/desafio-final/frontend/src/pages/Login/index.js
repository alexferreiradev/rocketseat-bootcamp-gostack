import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Background, Logo, LogoText, SubmitButton } from './styles';
import { Form, Label, Input } from '../../components/Form';
import Container from '../../components/Container';
import * as UserActions from '../../store/modules/user/actions';

function Login() {
    const dispatch = useDispatch();
    const [user] = useState({ email: '', senha: '' });

    function handleLogin({ email, senha }) {
        dispatch(UserActions.doLoginReq(email, senha));
    }

    return (
        <Background>
            <Container>
                <Logo />
                <LogoText>fastfeet</LogoText>
                <Form initialData={user} onSubmit={handleLogin}>
                    <Label>Seu E-mail</Label>
                    <Input
                        name="email"
                        type="text"
                        placeholder="exemple@dominio.com"
                    />
                    <Label>Sua senha</Label>
                    <Input
                        name="senha"
                        type="password"
                        placeholder="Sua senha"
                    />

                    <SubmitButton type="submit">
                        <span>Entrar no sistema</span>
                    </SubmitButton>
                </Form>
            </Container>
        </Background>
    );
}

export default Login;
