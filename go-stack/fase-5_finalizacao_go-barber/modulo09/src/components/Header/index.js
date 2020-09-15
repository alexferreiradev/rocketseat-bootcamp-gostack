import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-purple.svg';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="gobarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Alex Rabelo</strong>
              <Link to="/profile">Meu perfil</Link>
              <img
                src="https://api.adorable.io/avatars/50/abott@adorable.png"
                alt="Alex Rabelo"
              />
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
