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
  border-radius: 3px;
  background-color: rgb(${(props) => props.color});
`;

const TNullColorCell = styled.td`
  border: 1px solid grey;
  border-radius: 3px;
  cursor: pointer;
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
      description: "Nieprzypisany",
    },
    {
      color: "255,0,0",
      description: "Niezapłacone",
    },
    {
      color: "0,255,0",
      description: "Opłacone",
    },
  ]);

  const [description, setDescription] = useState("");
  const [newColor, setNewColor] = useState("");

  const DeleteColorStatusRowHandler = (id) => {
    const data = [...colorStatusData];
    data.splice(id, 1);
    console.log(data);
    setColorStatusData(data);
  };

  return (
    <Container>
      <Table>
        <Thead>
          <Tcell>Kolor</Tcell>
          <Tcell>Znaczenie</Tcell>
          <Tcell></Tcell>
        </Thead>
        {colorStatusData.map((colorStatus, index) => (
          <Trow key={index}>
            <TColorCell color={colorStatus.color}></TColorCell>
            <Tcell>{colorStatus.description}</Tcell>
            <Tcell>
              <ButtonTable
                rowId={colorStatus.id}
                onClick={() => {
                  DeleteColorStatusRowHandler(index);
                }}
              >
                Usuń
              </ButtonTable>
            </Tcell>
          </Trow>
        ))}
        <Trow>
          <TNullColorCell></TNullColorCell>
          <Tcell>
            <Input onChange={(e) => setDescription(e.target.value)} />
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
