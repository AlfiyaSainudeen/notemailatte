import React, { useContext } from 'react';
import { NotificationConsumer } from './NotificationContext';
import NotificationBox from './NotificationBox';

const TeacherPage = () => {
  return (
    <div>
      <h1>Teacher Page</h1>
      <NotificationBox />
    </div>
  );
};

export default () => (
  <NotificationConsumer>
    {() => <TeacherPage />}
  </NotificationConsumer>
);