import logo from './logo.svg';
import './App.css';
import Mailer from './mailer';
import Mail from './Mail';
import MessageForm from './Message/Message';
import AttendanceMarking from './Attendence/Attendence';
import { NotificationProvider } from './Nottification/NotificationContext';
import Admin from './Nottification/Admin';
import Student from './Nottification/Student';
import Teacher from './Nottification/Teacher';
function App() {
  return (
    <div className="App">
   {/* <Mailer/>
   <Mail/> */}
   <MessageForm/>
   <AttendanceMarking/>
   <NotificationProvider>
    <Admin/>
    <Student/>
    <Teacher/>
   </NotificationProvider>
   
    </div>
  );
}

export default App;
