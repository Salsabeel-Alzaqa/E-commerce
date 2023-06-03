import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  color: "white",
  height: "50px"
}));

function Clock() {
  let countDownDate = new Date("Jul 31, 2023 23:59:59").getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    setDays(Math.floor(dateDiff / (1000 * 60 * 60 * 24)).toString().padStart(2, "0"));
    setHours(Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0"));
    setMinutes(Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0"));
    setSeconds(Math.floor((dateDiff % (1000 * 60)) / 1000).toString().padStart(2, "0"));
    if (dateDiff < 0) {
      clearInterval(counter);
    }
  }, 1000);

  return (
    <StyledBox>
      <Typography variant="h6">
        {days} : {hours} : {minutes} : {seconds}
      </Typography>
    </StyledBox>
  );
}

export default Clock;
