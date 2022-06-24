import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f4f1de;
`;

const Table = styled.table``;

const Thead = styled.tr`
  font-size: 1.2em;
  font-weight: bold;
`;

const Tcell = styled.td`
  padding: 5px 10px;
  text-align: center;
  font-size: 1.1em;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 90px;
  padding: 10px 15px;
  margin: 10px 5px 5px 5px;
  background-color: #dee2e6;
  border-radius: 2px;
`;

export const PopUpColorStatus = () => {
  const [colorStatus, setColorStatus] = useState({
    color: "255,255,255",
    meaning: "Nieprzypisany",
  });

  return (
    <Container>
      <Table>
        <Thead>
          <Tcell>Kolor</Tcell>
          <Tcell>Znaczenie</Tcell>
        </Thead>
        <tr>
          <td></td>
          <Tcell>Nieprzypisany</Tcell>
        </tr>
      </Table>
      <ButtonContainer>
        <Button>Dodaj kolor</Button>
        <Button>Wybierz</Button>
        <Button>Anuluj</Button>
      </ButtonContainer>
    </Container>
  );
};
