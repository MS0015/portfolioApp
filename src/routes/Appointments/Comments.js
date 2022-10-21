import { Chat } from '@flyerhq/react-native-chat-ui';
import React, { useState } from 'react';

// For the testing purposes, you should probably use https://github.com/uuidjs/uuid
const uuidv4 = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.floor(Math.random() * 16);
    const v = c === 'x' ? r : (r % 4) + 8;
    return v.toString(16);
  });

function Comments() {
  const [messages, setMessages] = useState([]);
  const user = { id: '06c33e8b-e835-4736-80f4-63f44b66666c', name: 'Mathu' };

  const addMessage = (message) => {
    setMessages([message, ...messages]);
  };

  const handleSendPress = (message) => {
    const textMessage = {
      author: user,
      createdAt: Date.now(),
      id: uuidv4(),
      text: message.text,
      type: 'text',
    };
    addMessage(textMessage);
  };

  return (
    <Chat
      showUserAvatars
      showUserNames
      messages={messages}
      onSendPress={handleSendPress}
      user={user}
    />
  );
}

export default Comments;
