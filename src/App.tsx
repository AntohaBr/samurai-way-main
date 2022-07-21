import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

export type appType = {
    appPosts: Array<NewAppType>
    appDialogs:Array< newDialogsType>
    appMessages:Array< newMessagesType>
}

export type NewAppType = {
    id: number,
    message: string,
    likesCount: number
}
export type newDialogsType = {
    id: number,
    name: string
}
export type newMessagesType = {
    id: number,
    message: string
}

const App = (props: appType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs" render={() => <Dialogs appDialogs={props.appDialogs} appMessages={props.appMessages}/>}/>
                    <Route path="/profile" render={() => <Profile profilePosts={props.appPosts}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;