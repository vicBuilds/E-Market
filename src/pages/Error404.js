import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Error = styled.h1`
  font-size: 90px;
  font-weight: 900;
`;

const Error404 = () => {
  return (
    <Container>
      <Error>Error 404. Page Not Found..</Error>
    </Container>
  );
};

export default Error404;
