import React, {useEffect, useState} from 'react';
import {Message} from "../type";
import MessageItem from "../Message-item/Message-item";

const URL = 'http://146.185.154.90:8000/messages';

const Messages = () => {

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(URL);
      if (response.ok) {
        const messagesResponse = await response.json();
        let lastDateItem = messagesResponse.length - 1;
        let lastDate = messagesResponse[lastDateItem].datetime;
        setMessages(messagesResponse);

        setInterval(async () => {
          const newResponse = await fetch(URL + '?datetime=' + lastDate);
          const newMessages = await newResponse.json();
          if (newMessages.length !== 0) {
            setMessages(newMessages);
          }
        }, 3000);
      }
    };
    fetchData().catch(console.log);

  }, []);


  return (
    <div className="d-flex flex-column-reverse">
      {messages.map((message) => (
        <MessageItem
          message={message.message}
          name={message.author}
          date={message.datetime}
          key={Math.random().toString()}
        />
      ))}
    </div>
  );
};

export default Messages;