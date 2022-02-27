
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog}>
                Andrey
            </div>
            <div className={s.dialog}>
                Sasha
            </div>
            <div className={s.dialog}>
                Masha
            </div>
            <div className={s.dialog}>
                Petya
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