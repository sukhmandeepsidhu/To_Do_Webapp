import { Container, Navbar } from 'react-bootstrap';

const TopNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>To Do Webapp</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
