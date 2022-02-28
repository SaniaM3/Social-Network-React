
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
           <NavLink to = {path}>{props.name}</NavLink> 
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>
                {props.message}
            </div>
    )
}

 
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