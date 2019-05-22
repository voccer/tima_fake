/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Footer.scss';
import Pencil from '../../../image/core-img/pencil.png';
import Calendar from '../../../image/core-img/calendar.png';
import Bg7 from '../../../image/bg-img/7.jpg';
import Bg8 from '../../../image/bg-img/8.jpg';
import Bg9 from '../../../image/bg-img/9.jpg';
export default class Footer extends Component {
  render() {
    return (
      <>
        <section
          className="newsletter-area section-padding-100 bg-img jarallax"
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/dz1gprgpn/image/upload/v1557072179/statics/6_euemq0.jpg)',
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-10 col-lg-8">
                <div className="nl-content text-center">
                  <h2>Đăng kí để nhận những thông tin mới nhất</h2>
                  <form action="#">
                    <input
                      type="email"
                      name="nl-email"
                      id="nlemail"
                      placeholder="Your e-mail"
                    />
                    <button type="submit">Đăng kí</button>
                  </form>
                  <p>
                    Nơi đem đến cho bạn những khoản vay nhanh và tiện lợi hàng
                    đầu Việt Nam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer-area ">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-100">
                  <h5 className="widget-title" style={{ marginTop: '40px' }}>
                    Về chúng tôi
                  </h5>
                  <nav>
                    <ul>
                      <li>
                        <a href="/">Trang chủ</a>
                      </li>
                      <li>
                        <a href="/">Về chúng tôi</a>
                      </li>
                      <li>
                        <a href="/">Các dịch vụ</a>
                      </li>
                      <li>
                        <a href="/">Liên hệ</a>
                      </li>
                      <li>
                        <a href="/">Tin tức</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-100">
                  <h5 className="widget-title" style={{ marginTop: '40px' }}>
                    Đối tác
                  </h5>
                  <nav>
                    <ul>
                      <li>
                        <a href="#">VietinBank Insurance</a>
                      </li>
                      <li>
                        <a href="#">Nam A Bank</a>
                      </li>
                      <li>
                        <a href="#">Vietnam Capital</a>
                      </li>
                      <li>
                        <a href="#">Dunearn</a>
                      </li>
                      <li>
                        <a href="#">Belt Road</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-100">
                  <h5 className="widget-title" style={{ marginTop: '40px' }}>
                    Dịch vụ cho vay
                  </h5>
                  <nav>
                    <ul>
                      <li>
                        <a href="#">Vay cá nhân</a>
                      </li>
                      <li>
                        <a href="#">Vay cầm cố</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-100">
                  <h5 className="widget-title" style={{ marginTop: '40px' }}>
                    Tin mới nhất
                  </h5>

                  <div className="single-latest-news-area d-flex align-items-center">
                    <div className="news-thumbnail">
                      <img src={Bg7} alt="" />
                    </div>
                    <div className="news-content">
                      <a href="#">Vay tiền trực tuyến</a>
                      <div className="news-meta">
                        <a href="#" className="post-author">
                          <img src={Pencil} alt="" /> Tiến Đạt
                        </a>
                        <a href="#" className="post-date">
                          <img src={Calendar} alt="" /> Tháng tư 19
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="single-latest-news-area d-flex align-items-center">
                    <div className="news-thumbnail">
                      <img src={Bg8} alt="" />
                    </div>
                    <div className="news-content">
                      <a href="#">Kỉ niệm ngày thành lập</a>
                      <div className="news-meta">
                        <a href="#" className="post-author">
                          <img src={Pencil} alt="" /> Cao Cảnh Smith
                        </a>
                        <a href="#" className="post-date">
                          <img src={Calendar} alt="" /> Tháng ba 1
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="single-latest-news-area d-flex align-items-center">
                    <div className="news-thumbnail">
                      <img src={Bg9} alt="" />
                    </div>
                    <div className="news-content">
                      <a href="#">10 kĩ năng để có khoản vay phù hợp</a>
                      <div className="news-meta">
                        <a href="#" className="post-author">
                          <img src={Pencil} alt="" /> Trọng Đức
                        </a>
                        <a href="#" className="post-date">
                          <img src={Calendar} alt="" /> Tháng hai 1
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
