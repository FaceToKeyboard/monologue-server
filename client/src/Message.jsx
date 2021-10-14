import React from "react";

const Message = (props) => {

  return (
    <p className='message' >{props.message.date} | {props.message.messageContent}</p>
  );
};

export default Message;
