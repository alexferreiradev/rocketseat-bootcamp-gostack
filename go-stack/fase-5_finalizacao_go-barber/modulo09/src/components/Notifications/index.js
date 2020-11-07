import React, { useState, useEffect, useMemo } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdNotifications } from 'react-icons/md';
import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationListComp,
  Scroll,
  Notification,
} from './styles';

function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notificationList, setNotificationList] = useState([]);

  const hasUnread = useMemo(() => {
    return !!notificationList.find((n) => n.read === false);
  }, [notificationList]);

  useEffect(() => {
    async function loadNotifications() {
      const res = await api.get('/notifications');

      const data = res.data.map((n) => ({
        ...n,
        timeDistance: formatDistance(parseISO(n.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
      }));
      setNotificationList(data);
    }
    loadNotifications();
  }, []);

  function handleToogleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);

    setNotificationList(
      notificationList.map((n) => {
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

      <NotificationListComp visible={visible}>
        <Scroll>
          {notificationList.map((notification) => (
            <Notification unread={!notification.read} key={notification._id}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => handleMarkAsRead(notification._id)}
                >
                  Marcar como lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationListComp>
    </Container>
  );
}

export default Notifications;
