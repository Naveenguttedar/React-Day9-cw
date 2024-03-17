import { createGlobalStyle } from 'styled-components';
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ExerciseList from './components/ExerciseList';
function App() {
    const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto:wght@300;400;700&display=swap');
*{
margin:0;
padding:0;
box-sizing:border-box;
}
body{
  // background-color: #242424;
font-family:"Roboto",sans-serif;
}
`
    return (
        <Container>
            <GlobalStyle />
            <Header />
            <Gallery />
            <ExerciseList />
        </Container>
    )
}

const Container = styled.div`
padding:.5rem 2rem;
`
export default App
