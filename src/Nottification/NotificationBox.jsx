import React, { useContext } from 'react';
import { NotificationContext } from './NotificationContext';

const NotificationBox = () => {
  const { notification } = useContext(NotificationContext);

  return (
    <div className="notification-box">
      {notification && <p>{notification}</p>}
    </div>
  );
};

export default NotificationBox;