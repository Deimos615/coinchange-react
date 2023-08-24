import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { commonAxios } from '../api/axios';
import { useDispatch } from 'react-redux';
import { loginAction } from '../store/actions/authAction';

export const Login = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const [passwordShow, setPasswordShow] = useState()
  const [errors, setErrors] = useState({})
  const [serverError, setServerError] = useState('')
  const [serverSuccess, setServerSuccess] = useState('')

  const showPassword = () => {
    setPasswordShow(preState => preState = !preState)
  }

  const onSubmit = async (e) => {
    console.log(e)
    setErrors({})
    setServerError('')
    setServerSuccess('')
    const validationErrors = validateForm(e)
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await commonAxios.post(`/auth/login`, e)
        if (response.data.success) {
          setServerSuccess(response.data.msg)
          window.location.href = '/'
          dispatch(loginAction(response.data))
          // toast.success(response.data.msg)
        }
      } catch (err) {
        if (err.response) {
          if (!err.response.data.success) {
            setServerError(err.response.data.msg)
            dispatch(loginAction(err.response.data))
          } else {
            console.log(err)
          }
        } else {
          console.log(err)
        }
      }
    } else {
      setErrors(validationErrors)
    }
  }

  const validateForm = (data) => {
    // Perform validation checks here and return an object with errors (if any)
    const errors = {}
    Object.keys(data).map((v, k) => {
      switch (v) {
        case 'email':
          const email = Object.values(data)[k]
          if (!email) errors.email = 'Email is required!'
          else if (!isValidEmail(email)) errors.email = 'Invalid email address.'
          break
        case 'password':
          const password = Object.values(data)[k]
          if (!password) errors.password = 'Password is required!'
          else if (password.length < 6 || password.length > 50) errors.password = 'Password must be between 6 and 50 characters.'
          else if (!isValidPassword(password)) errors.password = 'Password must contain at least 1 number.'
          break
        case 'username':
          const username = Object.values(data)[k]
          if (!username) errors.username = 'Username is required!'
          break
      }
    })
    return errors
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isValidPassword = (Password) => {
    const passwordRegex = /\d/
    return passwordRegex.test(Password)
  }

  return (
    <div>
      <section className="login_section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="signup_inner_wrap">
                <div className="signup_frm_wrap">
                  <form onSubmit={handleSubmit(onSubmit)} action='#'>
                    <h6>Log In</h6>
                    <p>Hey, Enter your details to sign in <br />to your account</p>
                    {serverSuccess && <div className='text-green-500 text-center'>{serverSuccess}</div>}
                    {serverError && <div className='text-red-500 text-center'>{serverError}</div>}
                    <div className="form-group">
                      <input {...register('email')} className="form-control" placeholder="Enter Email" required="" data-listener-added_edb9d59a="true" />
                      <i className="fa fa-user"></i>
                      {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                    </div>
                    <div className="form-group">
                      <input {...register('password')} type={passwordShow ? 'text' : 'password'} className="form-control" placeholder="Your Password" required="" />
                      <span toggle="#password-field" className="toggle-password" id="myDIV" onClick={showPassword}>View</span>
                      {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
                    </div>
                    <div className="form-groupa">
                      <p>Having trouble logging in?</p>
                    </div>
                    <div className="form-group ">
                      <button type="submit" className="btn btn_submit">LOG IN </button>
                    </div>
                    <div className="form-group mb-0">
                      <p>Don’t have an account?
                        <a href="/signup">Sign Up</a>
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
  )
};
