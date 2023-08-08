import './App.css';
import Header from './components/Header';
import Info from './components/Info';
import Career from './components/Career';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    box-sizing: border-box;
    background: #F0F0F2;
  }
  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Info />
      <Career />
      <Skill />
      <Project />
      <Contact />

    </>
  );
}

export default App;
