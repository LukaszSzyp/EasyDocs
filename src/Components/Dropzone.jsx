import React from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const maxNumberOfPages = 4;
let numberOfPages;
function pageNumberValidator(file) {
  const reader = new FileReader();
  reader.readAsBinaryString(file);

  reader.onloadend = function () {
    const count = reader.result.match(/\/Type[\s]*\/Page[^s]/g).length;
  };

  console.log(numberOfPages);
  if (numberOfPages > maxNumberOfPages) {
    return {
      code: "name-too-large",
      message: `Liczba stron w dokumencie równa się ${numberOfPages} i jest większa niż ${maxNumberOfPages}`,
    };
  }

  return null;
}

export function Dropzone(props) {
  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      accept: {
        "pdf/pdf": [".pdf"],
      },
      validator: pageNumberValidator,
    });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path}
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div className="container">
      <Container {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </Container>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </div>
  );
}

<Dropzone />;
