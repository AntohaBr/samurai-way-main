import React from 'react';
import s from './Navbar.module.css';


//let s = {
      //  "nav" : "Navbar_nav_3ou9Q",
       // "item" : "Nav_item_3qaF3"
//}


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}


export default Navbar;