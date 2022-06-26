import React from "react";
import styled from "styled-components";

const MessageBox = styled.div`
  width: 150px;
  text-align: center;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #d8d8d8af;
  font-size: 1.2em;
`;

export const PopUpMessage = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;
  return <MessageBox>{message}</MessageBox>;
};
