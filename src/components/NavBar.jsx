import React, { useState, useEffect} from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if ( window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdadeActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={Logo} alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onCLick={() => onUpdadeActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onCLick={() => onUpdadeActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onCLick={() => onUpdadeActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/adauto-goncalves/"><img src={navIcon1} alt=""/></a>
                        <a href="https://github.com/Adal1942"><img src={navIcon2} alt=""/></a>
                        <a href="https://www.instagram.com/adal.1942/"><img src={navIcon3} alt=""/></a>
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
