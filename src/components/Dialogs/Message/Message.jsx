import React from 'react';
import s from './../Dialogs.module.css';
import './Message.css';

const Message = (props) => {
    return (
        <div>
            <div className={`${s.message} ${props.user}`}>{props.message}</div>
        </div>
    );
}

export default Message;