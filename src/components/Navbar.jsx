import { Container, Navbar as Navbar2} from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Navbar2
      bg="danger"
      variant="dark"
      
    >
      <Container fluid className="navbar-component justify-content-start">
        <div style={{display: "flex", flexGrow: 1}}>
            <div>
                <Link to="/" className="text-white ms-3 text-decoration-none">🏠 Home</Link>
                <Link to="/contacto" className="text-white ms-3 text-decoration-none">📚 Contacto</Link>
            </div>
        </div>
        <Navbar2.Brand>🍰 Happy Cake </Navbar2.Brand>
      </Container>
    </Navbar2>
  );
};

