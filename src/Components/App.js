import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #333;
    color: #fff;
  }
`;

const Output = styled.div`
  font-size: 3rem;
`;

const App = () => (
  <>
    <GlobalStyle />
    <Output>
      Password Generator
    </Output>
  </>
)

export default App;
