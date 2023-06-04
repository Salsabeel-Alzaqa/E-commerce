import React from "react";
import LinkLog from "../../components/LinkLog";
import ProfileInfo from "./ProfileInfo";
import UserFavorite from "./UserFavorite";
import { Divider , Box } from "@mui/material";
function Profile() {
    return (
        <>
            <LinkLog />
            <ProfileInfo />
            <Box m={5}>
                <Divider />
            </Box>
            <UserFavorite />
        </>
    );
}
export default Profile;