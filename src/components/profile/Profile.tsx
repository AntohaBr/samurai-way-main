import React from 'react';
import ProfileInfo from "./profikeInfo/ProfileInfo";
import MyPosts from "./my posts/MyPosts";
import {NewAppType} from "../../App";


type profileType = {
    profilePosts:Array<NewAppType>
}

const Profile = (props:profileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                myPosts={props.profilePosts}
            />
        </div>
    );
}

export default Profile;