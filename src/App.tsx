import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import NavContainer from './containers/NavContainer';
import MovieContainer from './containers/MovieContainer';
import FooterContainer from './containers/FooterContainer';

// @flow

function App() {
  return (
    <Container fluid>
      <NavContainer />
      <MovieContainer />
      <FooterContainer show={true} title={'GetFlex 2021 | All rights reserve.'} />
    </Container>
  );
}

export default App;
