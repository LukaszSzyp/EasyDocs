import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 20px;
  height: 10px;
  background-color: red;
  border-radius: 2px;
`;

export const StatusBox = () => {
  const [boxColor, setBoxColor] = useState("255,0,0");
  return <Box onClick={() => console.log("click")} />;
};
