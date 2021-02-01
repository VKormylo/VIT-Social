import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AddMessageForm from './AddMessageForm/AddMessageForm';

const Dialogs = (props) => {

    let state = props.dialogsPage;
    
    let dialogsElements = [
        state.dialogs.map(d =>
            <DialogItem name={d.name} id={d.id} key={d.id} />
        )
    ];

    let messagesElements = [
        state.messages.map(m =>
            <Message message={m.message} user={m.user} key={m.id} />
        )
    ];

    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div>
            <div className={s.title}>Dialogs</div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{ messagesElements }</div>
                    <AddMessageForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    );
}

export default Dialogs;