import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../assets/images/logo.png'

export const Footer = () => (
  <div>
    <section className='footer_section'>
      <Container>
        <div className="row">
          <div className="col-lg-6">
            <div className="ftr_logo">
              <img src={logo} alt="Logo" className="img-fluid" />
              <p>Effortless, Brisk, and Private. Transfer your currencies with our secure network today. </p>
              <ul>
                <li>
                  <a href="/terms-of-service">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-3">
                <div className="ftr_links">
                  <h6>EXPLORE</h6>
                  <ul>
                    <li>
                      <a href="/?features">Features</a>
                    </li>
                    <li>
                      <a href="/faqs">FAQs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <div className="ftr_links">
                  <h6>LEGAL</h6>
                  <ul>
                    <li>
                      <a href="/terms-of-service">Terms</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6">
                {/* <div className="ftr_social">
                  <h6>SOCIAL</h6>
                  <ul>
                    <li>
                      <a href="https://discord.gg/Whhpfx73BB" target="_blank">
                        <i className="icon fa-brands fa-discord"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/coinchange_to" target="_blank">
                        <i className="icon fa-brands fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="ftr_copy_txt">
              <p>Copyright © 2022 Bass Exchange. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </div>
);
