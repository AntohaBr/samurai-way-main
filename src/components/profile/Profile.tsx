import React from 'react';
import MyPosts from "./my posts/MyPosts";
import ProfileInfo from "./profikeInfo/ProfileInfo";


const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;