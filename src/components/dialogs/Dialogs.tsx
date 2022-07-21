import React from 'react';
import s from './Dialogs.module.css';
import Message from "./message/Message";
import DialogItem from "./dialogItem/DialogsItem";
import {newDialogsType, newMessagesType} from "../../App";


type dialogsPropsType={
    appDialogs:Array< newDialogsType>
    appMessages:Array< newMessagesType>
}

const Dialogs = (props:dialogsPropsType) => {
    
    let dialogsElement = props.appDialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElement = props.appMessages.map(m => <Message messages={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>

        </div>
    );
}

export default Dialogs;