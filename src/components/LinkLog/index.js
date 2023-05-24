import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Box, Breadcrumbs } from "@mui/material";
import style from './linkLog.module.css';
const LinkLog = () => {
  const [pathComponents, setPathComponents] = useState([]);
  useEffect(() => {
    const url = window.location.href;
    const path = new URL(url).pathname;
    setPathComponents(path.split("/").filter((component) => component !== ""));
  }, []);
    const activeLink = pathComponents.slice(-1)[0];
    return (
        <Box sx={{ bgcolor: '#DBCECE' }} p={2}>
            <Breadcrumbs separator=" / " aria-label="breadcrumb" px={10}>
                <Link to="/"  className={style.link}>Home</Link>
                {pathComponents.map((component, index) => {
                    const isActive = component === activeLink;
                    return (
                        <Link key={index} to={`/${component}`}  className={`${style.link} ${isActive ? style.active : ''}`}>
                            {component}
                        </Link>
                    )
                })
                }
            </Breadcrumbs>
        </Box>
    );
};
export default LinkLog;