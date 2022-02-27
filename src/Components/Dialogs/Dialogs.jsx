
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog}>
               <NavLink to = '/dialogs/1'>Andrey</NavLink> 
            </div>
            <div className={s.dialog}>
            <NavLink to = '/dialogs/2'>Sasha</NavLink> 
            </div>
            <div className={s.dialog}>
            <NavLink to = '/dialogs/3'>Masha</NavLink> 
            </div>
            <div className={s.dialog}>
            <NavLink to = '/dialogs/4'>Petya</NavLink> 
            </div>
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