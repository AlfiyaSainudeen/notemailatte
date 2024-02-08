import React, { createContext, useState } from 'react';

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const sendNotification = (message) => {
    setNotification(message);
  };

  return (
    <NotificationContext.Provider value={{ notification, sendNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

const NotificationConsumer = NotificationContext.Consumer;

export { NotificationProvider, NotificationConsumer, NotificationContext };