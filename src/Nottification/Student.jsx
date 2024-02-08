import React, { useContext } from 'react';
import { NotificationConsumer } from './NotificationContext';
import NotificationBox from './NotificationBox';

const StudentPage = () => {
  return (
    <div>
      <h1>Student Page</h1>
      <NotificationBox />
    </div>
  );
};

export default () => (
  <NotificationConsumer>
    {() => <StudentPage />}
  </NotificationConsumer>
);