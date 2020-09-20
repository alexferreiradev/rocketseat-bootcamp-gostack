import React, { useState, useEffect } from 'react';
import { parseISO } from "date-fns";

import { MdNotifications } from 'react-icons/md';
import api from "~/services/api";

import { Container, Badge, NotificationList, Scrool, Notification } from './styles';

function Notification() {

  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(()=> {
    async function loadNotifications(){
      const res = await api.get('notifications');

      setNotifications(res.data);
    }
    loadNotifications();
  },[]);

  function handleToogleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge hasRead onClick={handleToogleVisible}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scrool>
        <Notification unread>
          <p>Você possui um novo agendamento para amanhã</p>
          <time>há 2 dias</time>
          <button type="button">Marcar como lida</button>
        </Notification>
        </Scrool>
      </NotificationList>
    </Container>
  );
}

export default Notification;
