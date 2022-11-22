import React from 'react';

interface Props {
  date: string
  name: string;
  message: string;
}


const MessageItem: React.FC<Props> = ({name, message, date}) => {
  return (
    <div className="card mb-2 mt-2 border border-primary">
      <div className="card-header text-white bg-primary ">
        <p>Username: <strong>{name}</strong></p>
        <p>Date: <strong>{date}</strong></p>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{message}</p>
        </blockquote>
      </div>
    </div>
  );
};

export default MessageItem