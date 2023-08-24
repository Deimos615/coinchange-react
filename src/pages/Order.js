import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import Cookies from 'js-cookie';
import { commonAxios } from '../api/axios';

export const Order = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [items, setItems] = useState([])
  const override = {
    display: "block",
    margin: "50px auto",
  };

  const token = Cookies.get('token')
  useEffect(async () => {
    if (token) {
      try {
        const response = await commonAxios.get('/order', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        setLoggedIn(true)
        setItems(response.data.orders)
        console.log('rsponse data......', response.data)
      } catch (err) {
        console.log(err)
      }
    } else {
      Cookies.remove('token')
      window.location.href = '/login'
    }
  }, [token])

  const finish = async (id) => {
    try {
      const response = await commonAxios.post(`/order/updateStatus/${id}`, {status: 'Finished'}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setLoggedIn(true)
      setItems(response.data.orders)
    } catch (err) {
      if (err.response.status === 401) {
        Cookies.remove('token')
        window.location.href = '/login'
      }
      console.log(err)
    }
  }

  const hold = async (id) => {
    try {
      const response = await commonAxios.post(`/order/updateStatus/${id}`, {status: 'Holding'}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setLoggedIn(true)
      setItems(response.data.orders)
    } catch (err) {
      if (err.response.status === 401) {
        Cookies.remove('token')
        window.location.href = '/login'
      }
      console.log(err)
    }
  }

  const cancel = async (id) => {
    try {
      const response = await commonAxios.post(`/order/updateStatus/${id}`, {status: 'Canceled'}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setLoggedIn(true)
      setItems(response.data.orders)
    } catch (err) {
      if (err.response.status === 401) {
        Cookies.remove('token')
        window.location.href = '/login'
      }
      console.log(err)
    }
  }

  return (
    <div>
      {loggedIn ? (
        <>
          <section className="my_order_sec">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="common_heading">
                    <h2>My <span>Orders</span></h2>
                    <p>In hac habitasse platea dictumst. Proin sollicitudin odio augue. Cras nibh m.</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="order_search_wrap">
                    <input type="text" placeholder="Search by Currency / Username / Email Address" />
                    <span>Total Transactions : {items.length}</span>
                  </div>
                  <div className="order_main_table">
                    <table>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>From Currency</th>
                          <th>To Currency</th>
                          <th>From Qty.</th>
                          <th>To Qty.</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{item.product}</td>
                            <td>{item.network}</td>
                            <td>{item.amount}</td>
                            <td>{item.estimated_amount}</td>
                            <td>{item.status}</td>
                            <td><button className='btn btn-success mx-1' onClick={() => finish(item.id)}>Finish</button><button className='btn btn-info mx-1' onClick={() => hold(item.id)}>Hold</button><button className='btn btn-danger mx-1' onClick={() => cancel(item.id)}>Cancel</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3">
                <a className="btn btn-primary rounded-pill px-3 order_link" href="/orders">All are caught up!</a>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <ClipLoader
            color={'#FFFFFF'}
            loading={true}
            size={50}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </>
      )}
    </div>
  )
};
