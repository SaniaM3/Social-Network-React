
import DialogItem from './DialogItem/Dialogs';
import s from './Dialogs.module.css'
import Message from './Message/Message';


 
const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Masha'},
        {id: 4, name: 'Petya'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi are you?'},
        {id: 3, message: 'Fine, Fuck!!!'},
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name = {d.name} id = {d.id}/>)

    let messagesElements = messages.map(m => <Message message = {m.message}/>)
    
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}


export default Dialogs;