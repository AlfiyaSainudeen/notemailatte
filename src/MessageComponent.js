import React, { useState } from 'react';
import { useMessageContext } from './MessageContext';

const MessageComponent = ({ isAdmin }) => {
    const { messages, addMessage } = useMessageContext();
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

        const sender = isAdmin ? 'Admin' : isAdmin ? 'Teacher' : 'Student';
        const message = { sender, content: newMessage };

        addMessage(message);
        setNewMessage('');
    };

    return (
        <div>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>
                        <strong>{msg.sender}:</strong> {msg.content}
                    </li>
                ))}
            </ul>

            <div>
                <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default MessageComponent;