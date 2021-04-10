import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import * as AuthActions from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('Email é requerido'),
  password: Yup.string().required('Senha é requerida'),
});

function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(AuthActions.signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <pre style={{ color: '#fff', marginTop: '8px' }}>
        {process.env.REACT_APP_VERSION}
      </pre>
      <Form onSubmit={handleSubmit} shema={schema}>
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Senha" />
        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Cria conta gratuíta</Link>
      </Form>
    </>
  );
}

export default SignIn;
