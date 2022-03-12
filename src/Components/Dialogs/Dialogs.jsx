
import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';
import DialogItem from './DialogItem/Dialogs';
import s from './Dialogs.module.css'
import Message from './Message/Message';


 
const Dialogs = (props) => {

    
    let dialogsElements = props.dialogs.map( d => <DialogItem name = {d.name} id = {d.id}/>);

    let messagesElements = props.messages.map( m => <Message message = {m.message}/>);

    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }



    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }
    
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea onChange = { onNewMessageChange } value={newMessageBody} placeholder='Enter your Message'></textarea>
                    </div>
                    <div>
                        <button onClick = {onSendMessageClick }>Send</button>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}


export default Dialogs;