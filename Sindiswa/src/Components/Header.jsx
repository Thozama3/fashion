import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">South Africa fashion week</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="/aboutUs">AboutUs</NavDropdown.Item>
              <NavDropdown.Item href="/events">Events</NavDropdown.Item>
              <NavDropdown.Item href="/venues">Venues</NavDropdown.Item>
              <NavDropdown.Item href="/thecollections">Thecollections</NavDropdown.Item>
              <NavDropdown.Item href="/newsletter">Newsletter</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;