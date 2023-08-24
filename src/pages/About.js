import React from 'react';
import big_logo from '../assets/images/big_logo.png'

export const About = () => (
  <div>
    <section className='about_us_section'>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="hero_txt pb-0">
          </div>
          <div className="common_heading">
            <h2>About Bass Exchange</h2>
            <p>Bass Exchange is a web based crypto exchange platform designed in such a way to allow users to swiftly exchange coins in a matter of few seconds, As of today we exchange upto 30 + coins. We plan on adding more as we grow. The site is completely adaptive to emergency issues such as refunding and exchanging after the time for sending is comeplete, based on the user-response. Bass Exchange is growing as you use and we plan on making it the best of use to our people.</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="about_header_wrap position-relative">
            <img src={big_logo} alt="Logo" className="img-fluid" />
          </div>
          <div className="about_titles">
            <h4><span>Privacy</span></h4>
            <p>We log absolutely no user data if you exchange as a guest. If you chose to register an account, we log the email ID of the account only to remove spam accounts. We make sure Bass Exchange is a trust worthy platform to our users</p>
          </div>
          <div className="about_titles">
            <h4>Our <span>Mission</span></h4>
            <p>We are long-term players with a vision to grow to a well-known and established exchange. Our goal become your reliable and trusted partners in the world of digital assets. To reach this we simplify the process of exchange by making our service as user friendly as possible.</p>
          </div>
          <div className="about_titles">
            <h4>Our <span>History</span></h4>
            <p>Bass Exchange.to was launched on Discord and operated on a Discord bot which was completely automated. Since then, operations have transferred to this website, allowing multiple users convenience in exchanging their coins easily and remotely.</p>
          </div>
          <div className="about_titles">
            <h4>Supported <span>Currencies</span> </h4>
            <div className="row">
              <div className="col-md-4">
                <ul>
                  <li>
                    <i className="fa fa-circle"></i> Bitcoin
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Ethereum
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Tether (ERC20)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Litecoin
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Monero
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> 0x (ERC20)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Basic Attention (ERC20)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Binance Chain
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Binance Smart Chain
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Binance USD (BEP2)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Binance USD (BEP20)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Bitcoin (BEP2)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Bitcoin (BEP20)
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li>
                    <i className="fa fa-circle"></i> Bitcoin (Lightning)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Bitcoin Cash
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> BitTorrent
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Cardano
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Cardano (BEP2)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Cardano (BEP20)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Chainlink (ERC20)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> DAI (ERC20)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Dash
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Dogecoin
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Ethereum (BEP2)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Ethereum (BEP20)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Ethereum Classic
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li>
                    <i className="fa fa-circle"></i> Maker (ERC20)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Pax Dollar (ERC20)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Polygon (ERC20)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Ripple
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Tether (BEP2)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Tether (BEP20)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Tether (TRC20)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Tron
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> TrueUSD (ERC20)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Trust Wallet Token (BEP2)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> USD Coin (ERC20)
                  </li>
                  <li>
                    <i className="fa fa-circle"></i> Zcash
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
