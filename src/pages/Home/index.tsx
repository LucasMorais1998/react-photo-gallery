import * as Photos from '../../services/photos';

import Header from "../../components/Header";

import { Container, MainContent } from "./styles";

const Home = () => {
  return (
    <Container>
      <MainContent>
        <Header />
      </MainContent>
    </Container>
  );
};

export default Home;
