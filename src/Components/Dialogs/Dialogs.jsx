
import React from 'react';
import DialogItem from './DialogItem/Dialogs';
import s from './Dialogs.module.css'
import Message from './Message/Message';


 
const Dialogs = (props) => {
    
    let dialogsElements = props.dialogs.map( d => <DialogItem name = {d.name} id = {d.id}/>)

    let messagesElements = props.messages.map( m => <Message message = {m.message}/>)

    let newMessage = React.createRef();
    let addMessage = () => {
        let messageText = newMessage.current.value;
        alert (messageText);
    }
    
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref = {newMessage} className={s.area_message} cols="30" rows="5"></textarea>
                </div>
                <button onClick={addMessage}>Отправить</button>
            </div>
            
        </div>
        
    )
}


export default Dialogs;