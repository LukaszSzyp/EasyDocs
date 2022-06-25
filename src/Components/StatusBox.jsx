import { useState } from "react";
import styled from "styled-components";
import { PopUpColorStatus } from "./PopUpColorStatus";

const Box = styled.div`
  width: 20px;
  height: 10px;
  background-color: red;
  border-radius: 2px;
`;

const PopUpColorStatusContainer = styled.div`
  display: ${(props) => (props.isClosed ? "none" : "")};
`;

export const StatusBox = () => {
  const [boxColor, setBoxColor] = useState("0,0,0");
  const [boxDescription, setBoxDescription] = useState("");
  const [isPopUpColorStatusClosed, setIsPopUpColorStatusClosed] =
    useState(true);
  return (
    <Box onClick={() => console.log("click")}>
      <PopUpColorStatusContainer isClosed={isPopUpColorStatusClosed}>
        <PopUpColorStatus />
      </PopUpColorStatusContainer>
    </Box>
  );
};
