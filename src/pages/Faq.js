import React from 'react';
import discord from '../assets/images/dis.svg'

export const Faq = () => (
  <div>
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
);
