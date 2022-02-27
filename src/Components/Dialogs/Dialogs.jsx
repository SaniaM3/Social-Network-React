
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
    return(
        <div className={s.dialogs}>
        <div className={s.dialogsItems}>
               <DialogItem name = 'Dimych' id = '1'/>
               <DialogItem name = 'Sasha' id = '2'/>
               <DialogItem name = 'Masha' id = '3'/>
               <DialogItem name = 'Petya' id = '4'/>
        </div>
        <div className={s.messages}>
            <Message message = 'Hi'/>
            <Message message = 'Hi are you?'/>
            <Message message = 'Fine, Fuck!!!'/>
        </div>
        </div>
    )
}


export default Dialogs;