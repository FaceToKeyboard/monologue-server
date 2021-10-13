import React, { useState, useEffect } from "react";
import axios from 'axios';
import Message from "./Message.jsx";

const App = () => {
  const messageData = {};
  const queryString = new URLSearchParams();
  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState(1);
  const [messages, setMessages] = useState([]);

  const getMessages = (userId) => {
    queryString.set('userId', userId);
    return axios.get('/messages', {params: queryString})
      .catch(err => console.log('Error retrieving messages: ', err));
  };

  useEffect(() => {
    getMessages(userId)
      .then(({data}) => {
        if (data.length !== undefined) {
          setMessages(data);
        }
      })
      .catch(err => console.log('Error mapping messages: ', err));
  }, [userId]);

  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const SendButtonHandler = (e) => {
    e.preventDefault();
    messageData.userId = userId;
    messageData.messageType = 'text';
    messageData.messageContent = message;

    axios.post('/messages', messageData)
      .catch(err => console.log('Error submitting message: ', err));
  };

  const userIdChangeHandler = (e) => {
    setUserId(e.target.value);
  }

  return (
    <>
      <label>Enter user ID:
        <input name='input-userid' type='number' value={userId} onChange={userIdChangeHandler} ></input>
      </label>
      <br></br>
      <div id='message-container'>
        {messages.map((message) => (
          <Message key={message._id.slice(0, 6)} messageContent={message.messageContent} />
        ))}
      </div>
      <br></br>
      <form>
        <label>Message:
          <input id='input-message' name='message-input' type='text' placeholder='Send a message' value={message} onChange={messageChangeHandler} ></input>
        </label>
        <button id='button-send' type='submit' onClick={SendButtonHandler} >Send</button>
      </form>
    </>
  );
};

export default App;
