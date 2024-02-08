import React, { useContext } from 'react';
import { NotificationConsumer } from './NotificationContext';
import NotificationBox from './NotificationBox';
import NotificationForm from './NotificationForm';


const AdminPage = () => {
  return (
    <div className="page">
      <h1>Admin Page</h1>
      <NotificationConsumer>
        {({ sendNotification }) => (
          <NotificationForm sendNotification={sendNotification} />
        )}
      </NotificationConsumer>
      <NotificationBox />
    </div>
  );
};

export default AdminPage;