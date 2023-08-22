import React from 'react';
export const Order = () => (
  <div>
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
              <span>Total Transactions : 0</span>
            </div>
            <div className="order_main_table">
              <table>
                <tr>
                  <th>#</th>
                  <th>From Currency</th>
                  <th>To Currency</th>
                  <th>From Qty.</th>
                  <th>To Qty.</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <a className="btn btn-primary rounded-pill px-3 order_link" href="/orders">All are caught up!</a>
        </div>
      </div>
    </section>
  </div>
);
