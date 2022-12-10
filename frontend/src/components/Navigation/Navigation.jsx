import './Navigation.css';
import { Navbar, Container, Nav, Button, Modal } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation(props) {
    const { currentAccount, currentProfile, logout } = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="dark" className="navbar" variant="dark" fixed="top" data-testid="navigation-1">
                <Container>
                    <Navbar.Brand>Megahit</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="">Movies</Link>
                        <Link className="nav-link" to="/favorites">Favorites</Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Button variant="secondary" className="gray-button" onClick={handleShow}>Settings</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>Account: {currentAccount}</Modal.Body>
                <Modal.Body>Profile: {currentProfile}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="gray-button" onClick={() => logout()}>
                        Logout
                    </Button>
                </Modal.Footer>
            </Modal>
            <br></br>
            <br></br>
            <br></br>
            <Outlet />
        </>
    )
}
