import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = [
        props.dialogsPage.dialogs.map(d =>
            <DialogItem name={d.name} id={d.id} />
        )
    ];

    let messagesElements = [
        props.dialogsPage.messages.map(m =>
            <Message message={m.message} user={m.user} />
        )
    ];

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div>
            <div className={s.title}>Dialogs</div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div>
                        <div>
                            <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText} />
                        </div>
                        <div>
                            <button onClick={addMessage}>Add message</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;