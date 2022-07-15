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
    let dialogsData=[
        {id:1, name:'Anton'},
        {id:2, name:'Igor'},
        {id:3, name:'Sasha'},
        {id:4, name:'Lena'},
        {id:5, name:'Masha'},
        {id:6, name: 'Ira'}
    ]

    let messagesData=[
        {id:1, message:'Hi'},
        {id:2, message:'Ha Ha'},
        {id:3, message:'Yo'},
        {id:4, message:'Yo'},
        {id:5, message:'Yo'},
        {id:6, message: 'Yo'}
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData[0].name}  id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name}  id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name}  id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name}  id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name}  id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name}  id={dialogsData[5].id}/>
            </div>
                <div className={s.messages}>
                   <Message message={messagesData[0].message}/>
                   <Message message={messagesData[1].message}/>
                   <Message message={messagesData[2].message}/>
                   <Message message={messagesData[3].message}/>
                   <Message message={messagesData[4].message}/>
                   <Message message={messagesData[5].message}/>
                </div>

        </div>
            );
            }

            export default Dialogs;