import React from "react";
import Services from "./Services";
import Story from "./Story";
import LinkLog from '../../components/LinkLog';
import { Container} from "@mui/material";
const About = () => {
    return (
        <>
            <LinkLog />
            <Container maxWidth="lg" >
                <Story />
                <Services />
            </Container>
        </>
    );
};
export default About;
