/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Section1.scss';
import Background2 from '../../image/bg-img/2.jpg';
import Background3 from '../../image/bg-img/3.jpg';
import Background4 from '../../image/bg-img/4.jpg';
export default class Section1 extends Component {
  render() {
    return (
      <section className="features-area">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-12 col-sm-6 col-lg-3">
              <div
                className="single-features-area mb-100 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="section-heading">
                  <div className="line" />
                  <p>Tổng quan về</p>
                  <h2>Sàn giao dịch</h2>
                  <p>của chúng tôi</p>
                </div>
                <h6>
                  Nơi cho phép người dùng trở thành người vay và người cho vay
                  với chính sách bảo đảm và giải ngân linh hoạt, đơn giản, nhanh
                  chóng, tiện lợi.
                </h6>
                <a href="#" className="btn credit-btn mt-50">
                  Khám phá ngay
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div
                className="single-features-area mb-100 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <img src={Background2} alt="" />
                <h5 style={{ textAlign: 'center' }}>Quan tâm tới bạn</h5>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div
                className="single-features-area mb-100 wow fadeInUp"
                data-wow-delay="500ms"
              >
                <img src={Background3} alt="" />
                <h5 style={{ textAlign: 'center' }}>Thủ tục nhanh chóng</h5>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div
                className="single-features-area mb-100 wow fadeInUp"
                data-wow-delay="700ms"
              >
                <img src={Background4} alt="" />
                <h5 style={{ textAlign: 'center' }}>
                  Vay dễ dàng &amp; tiện lợi
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
