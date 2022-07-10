import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem=(props:any)=>{
    return(
        <div className={s.dialog + ' '+ s.active}>
            <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message=(props:any)=>{
    return <div className={s.message}>{props.message}</div>
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name='Anton' id='1'/>
                <DialogItem name='Igor'  id='2'/>
                <DialogItem name='Sasha' id='3'/>
                <DialogItem name='Lena'  id='4'/>
                <DialogItem name='Masha' id='5'/>
                <DialogItem name='Ira'   id='6'/>
            </div>
                <div className={s.messages}>
                   <Message message='Hi'/>
                   <Message message='Ha Ha'/>
                   <Message message='Yo'/>
                   <Message message='Yo'/>
                   <Message message='Yo'/>
                </div>

        </div>
            );
            }

            export default Dialogs;