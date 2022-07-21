import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let posts = [
    {id: 1, message: 'Hi, how a you?', likesCount: 12},
    {id: 2, message: 'It`s my first post', likesCount: 10},
]

    let dialogs = [
        {id: 1, name: 'Anton'},
        {id: 2, name: 'Igor'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Lena'},
        {id: 5, name: 'Masha'},
        {id: 6, name: 'Ira'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Ha Ha'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ]

ReactDOM.render(
    <App
    appPosts={posts}
    appDialogs={dialogs}
    appMessages={messages}
    />,
    document.getElementById('root'));