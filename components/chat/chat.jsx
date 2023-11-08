// Chat.js
import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, user: 'user' }]);
      // Aquí debes enviar el mensaje a la IA y obtener su respuesta.
      // Puedes agregar la respuesta de la IA al estado de mensajes.
      // Por ejemplo: setMessages([...messages, { text: 'Respuesta de la IA', user: 'ai' }]);
      setInputText('');
    }
  };

  const Message = ({ message }) => {
    const messageClass = message.user === 'user' ? 'user-message' : 'ai-message';
    return <div className={`message ${messageClass}`}>{message.text}</div>;
  };
  
  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;