import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { singUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('Email é requerido'),
  telefone: Yup.string()
    .min(7, 'Insira um telefone válido')
    .required('Telefone é requerido'),
  password: Yup.string().required('Senha é requerida'),
});

function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password, telefone }) {
    dispatch(singUpRequest(name, email, password, telefone));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="telefone" type="tel" placeholder="(xx)-9-9999-9999)" />
        <Input name="password" type="password" placeholder="Senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}

export default SignUp;
