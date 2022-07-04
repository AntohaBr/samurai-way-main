import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./my posts/MyPosts";


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://img1.fonwall.ru/o/tk/tropiki-more-plyazh-ycsf.jpg?route=mid&amp;h=750"/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;