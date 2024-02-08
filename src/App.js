import React from 'react';
import { MessageProvider } from './MessageContext';
import MessageComponent from './MessageComponent';

const App = () => {
    return (
        <MessageProvider>
            <div>
                <h1>Admin Dashboard</h1>
                <MessageComponent isAdmin />
            </div>
            <div>
                <h1>Teacher Dashboard</h1>
                <MessageComponent />
            </div>
            <div>
                <h1>Student Dashboard</h1>
                <MessageComponent />
            </div>
        </MessageProvider>
    );
};

export default App;
