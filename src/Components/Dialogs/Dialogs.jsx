
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
           <NavLink to = {"/dialogs/" + props.id}>{props.name}</NavLink> 
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
            <div className={s.message}>
                Hi
            </div>
            <div className={s.message}>
                Hi are you?
            </div>
            <div className={s.message}>
                Fine, Fuck!!!
            </div>
        </div>
        </div>
    )
}


export default Dialogs;