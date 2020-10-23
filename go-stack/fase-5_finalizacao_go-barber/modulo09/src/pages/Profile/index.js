import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';
import AvatarInput from './AvatarInput';

import { Container } from './styles';

function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => {
    const { profile: profileData } = state.user;
    return {
      ...profileData,
      avatar: profileData.avatar ? profileData.avatar : {},
    };
  });

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          type="password"
          name="oldpassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Sair do Gobarber
      </button>
    </Container>
  );
}

export default Profile;
