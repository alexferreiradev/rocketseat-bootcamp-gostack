import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object.shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('Email é requerido'),
  password: Yup.string().required('Senha é requerida'),
});

function SignIn() {
  function handleSubmit() {}
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form onSubmit={handleSubmit} shema={schema}>
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="email" placeholder="Senha" />
        <button type="submit">Acessar</button>
        <Link to="/register">Cria conta gratuíta</Link>
      </Form>
    </>
  );
}

export default SignIn;
