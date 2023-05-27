import React from "react";
import { styled } from "@mui/system";

const Image = styled("img")({
  height: "266px",
  width: "193px",
  left: "37px",
  top: "26px",
  borderRadius: "10px",
});

const BookImage = ({image}) =>{

  return (
     <Image src={image} />
  );
}
export default BookImage;