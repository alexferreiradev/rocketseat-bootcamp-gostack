import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';
import iconePerfil from '~/assets/icone-perfil.png';
import { Container, Content, Profile } from './styles';

function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="gobarber" />
          <pre style={{ color: '#7159c1', marginRight: '8px' }}>
            {process.env.REACT_APP_VERSION}
          </pre>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <Link to="/profile">
              <img src={iconePerfil} alt={profile.name} />
            </Link>
          </Profile>
          <Notifications />
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
