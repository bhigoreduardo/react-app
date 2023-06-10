import { styled } from "styled-components";

import Hero from "./widgets/Hero";
import About from "./widgets/About";
import Works from "./widgets/Works";
import Contact from "./widgets/Contact";

const Main = styled.main`
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  background: url("./img/bg.jpeg");
  color: #fff;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Main>
      <Hero />
      <About />
      <Works />
      <Contact />
    </Main>
  );
}

export default App;
