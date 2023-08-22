import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../logo.svg'

const Styles = styled.div`
  .navbar {
    padding-bottom: 18px;
    padding-top: 13px;
    background: rgb(25, 29, 39) !important;
    border-bottom: 1px solid rgba(72, 94, 237, 0.25);
  }

  .navbar-nav .nav-link {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    font-feature-settings: 'liga'off;
    color: #FFFFFF;
    margin: 0 14px;
    transition: all linear .2s;
    position: relative;
    border-radius: 10px;
    padding: 10px 15px;

    &:hover {
      color: white;
      text-decoration: none;
      background: #485EED;
      transition: 0.5s;
    }
  }

  a {
    color: white;
    text-decoration: none;
  }

  .sticky-top {
    position: sticky;
    top: 0;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand='lg sticky-top'>
      <Container>
        <Navbar.Brand href='/'><img src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='m-auto'>
            <Nav.Item className='text-center'>
              <Nav.Link>
                <Link to='/#feature'>Features</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='text-center'>
              <Nav.Link>
                <Link to='/orders'>My Orders</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='text-center'>
              <Nav.Link>
                <Link to='/about-us'>About Us</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='text-center'>
              <Nav.Link>
                <Link to='/faqs'>FAQs</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="d-flex justify-content-center align-items-center">
            <a href='https://discord.gg/Whhpfx73BB' className="discord_link" target='_blank'>
              <i className="fa-brands fa-discord"></i>
            </a>
            <a href='https://twitter.com/coinchange_to' className="twitter_link" target='_blank'>
              <i className='fa-brands fa-twitter'></i>
            </a>
            <Nav>
              <Nav.Item className='text-center'>
                <Nav.Link>
                  <Link to='/login' className="font-weight-normal">Log In</Link>
                </Nav.Link>
              </Nav.Item>
              <Link to='/signup' className="signup_btn">
                Sign Up
              </Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Styles>
);
