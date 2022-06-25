import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
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

const Trow = styled.tr``;

const TColorCell = styled.td`
  background-color: #fff;
  border-radius: 3px;
`;

const Tcell = styled.td`
  padding: 5px 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonTable = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
`;

const Button = styled.button`
  width: 90px;
  padding: 5px 10px;
  margin: 10px 5px 5px 20px;
  background-color: #dee2e6;
  border-radius: 2px;
`;

const Input = styled.input`
  height: 25px;
`;

export const PopUpColorStatus = () => {
  const [colorStatusData, setColorStatusData] = useState([
    {
      color: "255,255,255",
      meaning: "Nieprzypisany",
    },
    {
      color: "255,0,0",
      meaning: "Niezapłacone",
    },
    {
      color: "0,255,0",
      meaning: "Opłacone",
    },
  ]);

  return (
    <Container>
      <Table>
        <Thead>
          <Tcell>Kolor</Tcell>
          <Tcell>Znaczenie</Tcell>
          <Tcell></Tcell>
        </Thead>
        {colorStatusData.map((colorStatus) => (
          <Trow>
            <TColorCell></TColorCell>
            <Tcell>{colorStatus.meaning}</Tcell>
            <Tcell>
              <ButtonTable>Usuń</ButtonTable>
            </Tcell>
          </Trow>
        ))}
        <Trow>
          <TColorCell></TColorCell>
          <Tcell>
            <Input />
          </Tcell>
          <Tcell>
            <ButtonTable>Dodaj nowy</ButtonTable>
          </Tcell>
        </Trow>
      </Table>
      <ButtonContainer>
        <Button>Anuluj</Button>
        <Button>Wybierz</Button>
      </ButtonContainer>
    </Container>
  );
};
