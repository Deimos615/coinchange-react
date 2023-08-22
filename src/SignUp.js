import React from 'react';
export const SignUp = () => (
  <div>
    <section className="login_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="signup_inner_wrap">
              <div className="signup_frm_wrap">
                <form>
                  <h6>Sign Up</h6>
                  <p>Hi, Please enter following details to <br /> create your account</p>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Username" name="username" required="" data-listener-added_edb9d59a="true" />
                    <i className="fa fa-user"></i>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter Email Address" name="email" required="" data-listener-added_edb9d59a="true" />
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="form-group">
                    <input id="password-field" type="password" className="form-control" name="password" placeholder="Your Password" required="" />
                    <span toggle="#password-field" className="toggle-password" id="myDIV">View</span>
                  </div>
                  <div className="form-group ">
                    <button type="submit" className="btn btn_submit">Create Account </button>
                  </div>
                  <div className="form-group mb-0">
                    <p>Already have an account ?
                      <a href="/login">Log In</a>
                      <br />Forget Password ?
                      <a href="/forgot-password">Reset Password</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div>
          <div className="grecaptcha-badge captch_badge" data-style="bottomright">
            <div className="grecaptcha-logo">
              <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LffrH0dAAAAAB9xl_D6BlLrjbHSTJhfcynxSXKA&amp;co=aHR0cHM6Ly9jb2luY2hhbmdlLnRvOjQ0Mw..&amp;hl=en&amp;v=x19joXI_IeQnFJ7YnfDapSZq&amp;size=invisible&amp;badge=bottomright&amp;cb=rsxe8hsi62gg" width="256" height="60" role="presentation" name="a-yp30wvcmhba1" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
            </div>
            <div className="grecaptcha-error">
            </div>
            <textarea id="g-recaptcha-response-1" name="g-recaptcha-response" className="g-recaptcha-response recaptcha_response"></textarea>
          </div>
          <iframe className='d-none'></iframe>
        </div>
      </div> */}
    </section>
  </div>
);
