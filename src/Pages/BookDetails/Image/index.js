import React from "react";
import { styled } from "@mui/system";

const DetailImage = styled("img")({
    height: '475px',
    width: "320px",
    left: "37px",
    borderRadius: "10px",
});

const Image = ({ image }) => {

  return (
      <DetailImage src={image} />
  );
}
export default Image;