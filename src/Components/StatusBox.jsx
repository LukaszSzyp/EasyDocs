import { useState } from "react";
import styled from "styled-components";
import { PopUpColorStatus } from "./PopUpColorStatus";

const Box = styled.div`
  width: 20px;
  height: 10px;
  background-color: rgb(${(props) => props.color});
  border-radius: 2px;
`;

const PopUpColorStatusContainer = styled.div`
  display: ${(props) => (props.isClosed ? "none" : "")};
`;

export const StatusBox = () => {
  const [boxColor, setBoxColor] = useState("192,192,192");
  const [boxDescription, setBoxDescription] = useState("");
  const [isPopUpColorStatusClosed, setIsPopUpColorStatusClosed] =
    useState(true);
  const PopUpColorStatusClosedHandler = () => {
    isPopUpColorStatusClosed
      ? setIsPopUpColorStatusClosed(false)
      : setIsPopUpColorStatusClosed(true);
  };
  return (
    <>
      <Box onClick={PopUpColorStatusClosedHandler} color={boxColor}></Box>
      <PopUpColorStatusContainer isClosed={isPopUpColorStatusClosed}>
        <PopUpColorStatus
          isClosed={isPopUpColorStatusClosed}
          setBoxColor={setBoxColor}
          setBoxDescription={setBoxDescription}
          PopUpColorStatusClosedHandler={PopUpColorStatusClosedHandler}
        />
      </PopUpColorStatusContainer>
    </>
  );
};
