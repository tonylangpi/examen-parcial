import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import House from '../assets/react.svg';
const NavExamen = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-warning">
        <Container>
          <Navbar.Brand as={Link} to="/">
            {" "}
            <Image src={House} style={{ width: "30px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav text-white">
            <Nav className="me-auto text-white">
              {/* <Nav.Link as={Link} to="/registrar">
                REGISTRAR
              </Nav.Link> */}
              <Nav.Link as={Link} to="/clientes">
                CLIENTES
              </Nav.Link>
              <Nav.Link as={Link} to="/productos">
                PRODUCTOS
              </Nav.Link>
              <Nav.Link as={Link} to="/proveedores">
                PROVEEDORES
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavExamen;
