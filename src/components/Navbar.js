import Nav from "react-bootstrap/Nav";
import NavbarRB from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartLength = useSelector((s) => s.cart).length;

  return (
    <NavbarRB bg="light" expand="lg" fixed="top" className="border-bottom border-primary">
      <Container>
        <Link to="" className="navbar-brand">
          Cart App
        </Link>
        <NavbarRB.Toggle aria-controls="basic-navbar-nav" />
        <NavbarRB.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="">
              Products
            </Link>
            <Link className="nav-link" to="carts">
              Cart - {cartLength}
            </Link>
          </Nav>
        </NavbarRB.Collapse>
      </Container>
    </NavbarRB>
  );
};

export default Navbar;
