import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import arrows from '../assets/images/arows.svg'
import featIcon from '../assets/images/feat_icon.svg'
import discord from '../assets/images/dis.svg'
import { useForm } from 'react-hook-form'
import { commonAxios } from '../api/axios';
import Cookies from 'js-cookie';

export const Home = () => {
  const { register, handleSubmit } = useForm()
  const [amount, setAmount] = useState(0)

  const onSubmit = async (e) => {
    const token = Cookies.get('token')
    if (token) {
      try {
        const response = await commonAxios.post('/order', e, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        if (response.data.success) {
          window.location.reload()
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      Cookies.remove('token')
      window.location.href = '/login'
    }
  }

  const handleKeyPress = (e) => {
    setAmount(e.target.value * 98 / 100)
  }
  return (
    <div>
      <section className='home_section'>
        <div className='row justify-content-center'>
          <Col sm={12}>
            <div className='hero_txt'>
              <h1>
                The Lighting Fast <br />Cryptocurrency Exchang
              </h1>
            </div>
          </Col>
        </div>
        <div className='row justify-content-center'>
          <Col md={10}>
            <form onSubmit={handleSubmit(onSubmit)} action='#'>
              <div className='hero_frm_wrap'>
                <div className='exchange_top_wrap'>
                  <div className='echange_lft'>
                    <div className='echange_input'>
                      <input {...register('amount')} type="number" onKeyUp={handleKeyPress}/>
                      <select {...register('product')} className="pl-0" style={{ maxWidth: '100px' }}>
                        <option value="Payoneer">Payoneer</option>
                        <option value="Wise">Wise</option>
                        <option value="Paypal">Paypal</option>
                      </select>
                    </div>
                    {/* <p>
                      1 BTC ≈ 15.5067901 ETH | $283.52
                    </p> */}
                  </div>
                  <div className='echange_centr'>
                    <img src={arrows} alt="a" className="img-fluid rt-90" />
                  </div>
                  <div className="echange_lft echange_rgt">
                    <div className="echange_input">
                      <select {...register('network')} className="pl-0" style={{ maxWidth: '100px' }}>
                        <option value="TRC20">USDT(TRC20)</option>
                        <option value="BEP20">USDT(BEP20)</option>
                        <option value="ERC20">USDT(ERC20)</option>
                      </select>
                      <input {...register('estimated_amount')} type="number" value={amount} readOnly/>
                    </div>
                    {/* <p>1 ETH ≈ 0.06317867 BTC | $279.53</p> */}
                  </div>
                </div>
                <div className='middle_input_wrap'>
                  <input {...register('wallet_address')} type="text" placeholder="Enter Wallet address" className="form-control text-white ether_address" required="" />
                </div>
                <div className='middle_input_wrap'>
                  <input {...register('toEmail')} type="text" placeholder="Enter Payment address" className="form-control text-white ether_address" required="" />
                </div>
                <div className="middle_inpt_wrap">
                  <div className="active">Fixed Rate (2.0%)</div>
                  {/* <a className="" href="/">Float Rate (0.5%)</a> */}
                </div>
                <div className='stand_for'>
                  <a href="#faqOne">What does this stand for?</a>
                </div>
                <div className="exchange_btn">
                  <button type="submit" className="btn btn_submit">BassExchange Now</button>
                </div>
              </div>
            </form>
          </Col>
        </div>
      </section>
      <section className="why_choice" id="feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common_heading">
                <h2>Why Choose <span>Bass Exchange ?</span></h2>
                <p>Bass Exchange takes pride in its ability to be a high end crypto exchange for its customers.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="feat_box_wrap feat_mt50">
                <img src={featIcon} alt="Feature icons" className="img-fluid" />
                <h5>Lowest Fees</h5>
                <p>Bass Exchange only takes .05% - 1% in fees, while other exchanges can reach 2-5%.</p>
              </div>
              <div className="feat_box_wrap">
                <img src={featIcon} alt="Feature icons" className="img-fluid" />
                <h5>30+ Assets</h5>
                <p>We make sure to give our users a very wide variety of well established and secure tokens.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feat_box_wrap">
                <img src={featIcon} alt="Feature icons" className="img-fluid" />
                <h5>No Deposits</h5>
                <p>Our service is a direct exchange, there is no process that requires a deposit before a transfer.</p>
              </div>
              <div className="feat_box_wrap">
                <img src={featIcon} alt="Feature icons" className="img-fluid" />
                <h5>No Registration</h5>
                <p>While having a secure account with us is certainly available for users, we know that privacy is important and make it optional.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feat_box_wrap feat_mt50">
                <img src={featIcon} alt="Feature icons" className="img-fluid" />
                <h5>24/7 Support</h5>
                <p>24/7 we listen to you, assist you, and make sure your questions do not go unanswered.</p>
              </div>
              <div className="feat_box_wrap">
                <img src={featIcon} alt="Feature icons" className="img-fluid" />
                <h5>$3.3mil+ Exchanged</h5>
                <p>We take pride in being able to provide our service to this extent to our loyal users.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feat_box_wrap">
                <img src={featIcon} alt="Feature icons" className="img-fluid" />
                <h5>No Hassle</h5>
                <p>Bass Exchange gets right to the point. We won't waste your precious time and will keep you satisfied with our service.</p>
              </div>
              <div className="feat_box_wrap">
                <img src={featIcon} alt="Feature icons" className="img-fluid" />
                <h5>Same Currency Exchanges</h5>
                <p>We offer exchanges with a currency to the same currency for any user who so desires.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common_heading">
                <h2>Frequently Asked <span>Questions</span></h2>
                <p>Before heading over to our dedicated support, see if your question is answered below!</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="faq_txt_wrap">
                <div className="bs-example">
                  <div className="accordion" id="faqSeq">
                    <div className="card">
                      <div className="card-header" id="faqOne">
                        <h2 className="mb-0">
                          <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseOne">
                            <span>What is a fixed rate?</span>
                            <i className="fa fa-plus"></i>
                          </button>
                        </h2>
                      </div>
                      <div id="collapseOne" className="collapse" aria-labelledby="faqOne" data-parent="#faqSeq">
                        <div className="card-body">
                          <p>If you choose a fixed rate, you will recieve the price you see at the point of initiating a transaction that will be fixed for a 10 minute period. You will be paying a 1% Fee total for this.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="faqTwo">
                        <h2 className="mb-0">
                          <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo">
                            <span>What is a float rate?</span>
                            <i className="fa fa-plus"></i>
                          </button>
                        </h2>
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="faqTwo" data-parent="#faqSeq">
                        <div className="card-body">
                          <p>If you choose a float rate, the exchange rate is finally set when your transaction receives the necessary number of blockchain network confirmations. You pay from 0.4% - 0.5% as fees.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="faqThree">
                        <h2 className="mb-0">
                          <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree">
                            <span>How can I track my order?</span>
                            <i className="fa fa-plus"></i>
                          </button>
                        </h2>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="faqThree" data-parent="#faqSeq">
                        <div className="card-body">
                          <p>You can track your order my saving the order ID or the link, otherwise you can register and the order ID will be saved in your orders.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="faqThreea">
                        <h2 className="mb-0">
                          <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThreea">
                            <span>Is Bass Exchange user data saved?</span>
                            <i className="fa fa-plus"></i>
                          </button>
                        </h2>
                      </div>
                      <div id="collapseThreea" className="collapse" aria-labelledby="faqThreea" data-parent="#faqSeq">
                        <div className="card-body">
                          <p>We log absolutely no user data if you exchange as a guest. If you chose to register an account, we log the email ID of the account only to remove spam accounts.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="faqThreeas">
                        <h2 className="mb-0">
                          <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThreeas">
                            <span>What can I do to speed up the transaction?</span>
                            <i className="fa fa-plus"></i>
                          </button>
                        </h2>
                      </div>
                      <div id="collapseThreeas" className="collapse" aria-labelledby="faqThreeas" data-parent="#faqSeq">
                        <div className="card-body">
                          <p>Each transaction in the blockchain has a price, which is a commission for those who participate in the maintenance of the blockchain network. The more contribute toward the network fee, the faster blockchain will process the transaction. This network fee is usually displayed automatically in your wallet.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="faqThreeasv">
                        <h2 className="mb-0">
                          <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThreeasv">
                            <span>Why is a currency I have exchanged not available anymore?</span>
                            <i className="fa fa-plus"></i>
                          </button>
                        </h2>
                      </div>
                      <div id="collapseThreeasv" className="collapse" aria-labelledby="faqThreeasv" data-parent="#faqSeq">
                        <div className="card-body">
                          <p>Sometimes Bass Exchange will temporarily remove a currency from our service while our developers fix bugs. If there are any issues or bugs we will ensure that our users do not have to experience them by resolving the issue and returning the currency to our exchange.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="faqThreeasx">
                        <h2 className="mb-0">
                          <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThreeasx">
                            <span>What is the max amount I can transfer?</span>
                            <i className="fa fa-plus"></i>
                          </button>
                        </h2>
                      </div>
                      <div id="collapseThreeasx" className="collapse" aria-labelledby="faqThreeasx" data-parent="#faqSeq">
                        <div className="card-body">
                          <p>Depending on the currency you have selected, you will be notified when you have reached the limit on an individual transfer.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="faqThreeasbfgkr">
                        <h2 className="mb-0">
                          <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThreeasbfgkr">
                            <span>Where can I see more credible sources of your exchange?</span>
                            <i className="fa fa-plus"></i>
                          </button>
                        </h2>
                      </div>
                      <div id="collapseThreeasbfgkr" className="collapse" aria-labelledby="faqThreeasbfgkr" data-parent="#faqSeq">
                        <div className="card-body">
                          <p>Please look through our Discord. We provide vouches of real costumers who will discuss with you if you reach out to them.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="faqFour">
                        <h2 className="mb-0">
                          <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefaqFour">
                            <span>Does Bass Exchange offer livechat?</span>
                            <i className="fa fa-plus"></i>
                          </button>
                        </h2>
                      </div>
                      <div id="collapsefaqFour" className="collapse" aria-labelledby="faqFour" data-parent="#faqSeq">
                        <div className="card-body">
                          <p>Yes! Please talk to our customer support team via livechat so they can assist with whatever you need at lightning speed.                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-12">
              <div className="faq_more_bttn">
                <p>Got More Questions ?</p>
                <div className="faq_chat_box">
                  <h6>
                    <img src={discord} alt="Chat" className="img-fluid" />
                    Join Our Discord Server
                  </h6>
                  <a href="https://discord.gg/Whhpfx73BB" target="_blank">
                    Chat Now
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  )
};
