import React, { useState, useEffect, useMemo } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdNotifications } from 'react-icons/md';
import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationList,
  Scrool,
  Notification,
} from './styles';

function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(() => {
    !!notifications.find((n) => n.read === false);
  }, [notifications]);

  useEffect(() => {
    async function loadNotifications() {
      const res = await api.get('notifications');

      const data = res.data.map((n) => ({
        ...n,
        timeDistance: formatDistance(parseISO(n.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
      }));
      setNotifications(data);
    }
    loadNotifications();
  }, []);

  function handleToogleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`notification/${id}`);

    setNotifications(
      notifications.map((n) => {
        if (n._id === id) {
          return { ...n, read: true };
        }
        return n;
      })
    );
  }

  return (
    <Container>
      <Badge hasUnread={hasUnread} onClick={handleToogleVisible}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scrool>
          {notifications.map((notification) => (
            <Notification unread={!notification.read} key={notification._id}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              <button type="button" onClick={handleMarkAsRead}>
                Marcar como lida
              </button>
            </Notification>
          ))}
        </Scrool>
      </NotificationList>
    </Container>
  );
}

export default Notifications;
