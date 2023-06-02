import React from "react";
import LinkLog from "../../components/LinkLog";
import ProfileInfo from "./ProfileInfo";
import UserFavorite from "./UserFavorite";
function Profile() {
    return (
        <>
            <LinkLog />
            <ProfileInfo />
            <UserFavorite />
        </>
    );
}
export default Profile;