import { useState } from "react";
import { RgbColorPicker } from "react-colorful";
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
  position: relative;
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

const RgbColorPickerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  display: ${(props) => (props.isClosed ? "none" : "")};
`;

export const PopUpColorStatus = () => {
  const [colorStatusData, setColorStatusData] = useState([
    {
      color: "255,255,255",
      description: "Nieprzypisany",
    },
    {
      color: "255,0,0",
      description: "Niezapłacona",
    },
    {
      color: "0,255,0",
      description: "Opłacona",
    },
  ]);

  const [description, setDescription] = useState("");
  const [color, setColor] = useState({ r: 200, g: 150, b: 35 });
  const [isColorPickerClosed, setIsColorPickerClosed] = useState(true);

  const deleteColorStatusRowHandler = (id) => {
    const data = [...colorStatusData];
    data.splice(id, 1);
    console.log(data);
    setColorStatusData(data);
  };

  const openColorPickerPopupHandler = () => {
    isColorPickerClosed
      ? setIsColorPickerClosed(false)
      : setIsColorPickerClosed(true);
  };

  const addNewColorStatus = () => {
    const newRow = {
      color: `${color.r},${color.g},${color.b}`,
      description: description,
    };
    const data = [...colorStatusData, newRow];
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
                  deleteColorStatusRowHandler(index);
                }}
              >
                Usuń
              </ButtonTable>
            </Tcell>
          </Trow>
        ))}
        <Trow>
          <TNullColorCell onClick={openColorPickerPopupHandler}>
            <RgbColorPickerContainer isClosed={isColorPickerClosed}>
              <RgbColorPicker color={color} onChange={setColor} />
            </RgbColorPickerContainer>
          </TNullColorCell>
          <Tcell>
            <Input onChange={(e) => setDescription(e.target.value)} />
          </Tcell>
          <Tcell>
            <ButtonTable onClick={addNewColorStatus}>Dodaj nowy</ButtonTable>
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
