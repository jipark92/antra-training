import { Navbar,Container,Nav } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Antra React Redux Album Search</Navbar.Brand>
            <Nav className="d-flex flex-row">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">CONTACT</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}