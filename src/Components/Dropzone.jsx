import React, { useState } from "react";
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

async function pagePDFCounter(file) {
  const reader = new FileReader();
  reader.readAsBinaryString(file);
  const pageCountPromise = new Promise((resolve) => {
    reader.onloadend = function () {
      const count = reader.result.match(/\/Type[\s]*\/Page[^s]/g).length;
      resolve(count);
    };
  });
  const count = await pageCountPromise;
  return count;
}

export function Dropzone() {
  const [AcceptedFiles, setAcceptedFiles] = useState();
  const maxNumberOfPages = 4;
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "pdf/pdf": [".pdf"],
    },
  });

  acceptedFiles.map((file) => {
    pagePDFCounter(file).then((count) => {
      if (count <= maxNumberOfPages)
        setAcceptedFiles(<li key={file.path}>{file.path}</li>);
    });
    return "";
  });

  return (
    <div className="container">
      <Container {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </Container>
      <aside>
        <h4>Accepted files</h4>
        <ul>{AcceptedFiles}</ul>
      </aside>
    </div>
  );
}

<Dropzone />;
