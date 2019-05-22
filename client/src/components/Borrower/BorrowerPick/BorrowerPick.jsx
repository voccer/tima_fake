import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BorrowerPick.scss';
import './Hover.scss';
import daquy from '../../../image/borrower/daquy.png';
import dienthoai from '../../../image/borrower/dienthoai.png';
import dongho from '../../../image/borrower/dongho.png';
import hoadondiennuoc from '../../../image/borrower/hoadondiennuoc.png';
import icloud_iphone from '../../../image/borrower/icloud-iphone.png';
import luong from '../../../image/borrower/luong.png';
import maytinh from '../../../image/borrower/maytinh.png';
import oto from '../../../image/borrower/oto.png';
import sohokhau from '../../../image/borrower/sohokhau.png';
import thechapsodo from '../../../image/borrower/thechapsodo.png';
import theongay from '../../../image/borrower/theongay.png';
import xemay from '../../../image/borrower/xemay.png';
const listDataPersonal = [
  {
    to: '/borrower/create/TINCHAPTHEOLUONG',
    title: 'Vay tín chấp theo lương',
    src: luong,
    text: (
      <h5>
        Vay tín chấp
        <br />
        theo lương
      </h5>
    )
  },
  {
    to: '/borrower/create/SOHOKHAU',
    title: 'Vay theo sổ hộ khẩu',
    src: sohokhau,
    text: (
      <h5>
        Vay theo
        <br />
        sổ hộ khẩu
      </h5>
    )
  },
  {
    to: '/borrower/create/DANGKIXEMAY',
    title: 'Vay theo đăng kí xe máy',
    src: xemay,
    text: (
      <h5>
        Vay theo
        <br />
        đăng kí xe máy
      </h5>
    )
  },
  {
    to: '/borrower/create/TRAGOPTHEONGAY',
    title: 'Vay trả góp theo ngày',
    src: theongay,
    text: (
      <h5>
        Vay trả góp
        <br />
        theo ngày
      </h5>
    )
  },
  {
    to: '/borrower/create/HOADONDIENNUOC',
    title: 'Vay theo hoá đơn điện nước',
    src: hoadondiennuoc,
    text: (
      <h5>
        Vay theo
        <br />
        hoá đơn điện nước
      </h5>
    )
  },
  {
    to: '/borrower/create/DANGKIOTO',
    title: 'Vay theo đăng kí xe ô tô',
    src: oto,
    text: (
      <h5>
        Vay theo
        <br />
        đăng kí ô tô
      </h5>
    )
  },
  {
    to: '/borrower/create/CAMCOTAISAN',
    title: 'Vay theo Icloud Iphone',
    src: icloud_iphone,
    text: (
      <h5>
        Vay theo
        <br />
        Icloud iphone
      </h5>
    )
  }
];
const listDataMortgage = [
  {
    to: '/borrower/create/CAMCOTAISAN',
    title: 'Cầm máy tính',
    src: maytinh,
    text: <h5>Cầm máy tính</h5>
  },
  {
    to: '/borrower/create/CAMCOTAISAN',
    title: 'Cầm điện thoại',
    src: dienthoai,
    text: <h5>Cầm điện thoại</h5>
  },
  {
    to: '/borrower/create/CAMCOTAISAN',
    title: 'Cầm ô tô',
    src: oto,
    text: <h5>Cầm ô tô</h5>
  },
  {
    to: '/borrower/create/CAMCOTAISAN',
    title: 'Cầm xe máy',
    src: xemay,
    text: <h5>Cầm xe máy</h5>
  },
  {
    to: '/borrower/create/CAMCOTAISAN',
    title: 'Cầm đá quý',
    src: daquy,
    text: <h5>Cầm đá quý</h5>
  },
  {
    to: '/borrower/create/CAMCOTAISAN',
    title: 'Cầm đồng hồ',
    src: dongho,
    text: <h5>Cầm đồng hồ</h5>
  },
  {
    to: '/borrower/create/CAMCOTAISAN',
    title: 'Vay theo thế chấp sổ đỏ',
    src: thechapsodo,
    text: (
      <h5>
        Vay theo
        <br />
        thế chấp sổ đỏ
      </h5>
    )
  }
];
export default class BorrowerPick extends Component {
  render() {
    return (
      <section className="services-area bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading text-center mb-100">
                <div className="line" />
                <p>Giới thiệu về</p>
                <h2>Các dịch vụ của chúng tôi</h2>
                <p>Chọn gói sản phẩm bạn muốn vay</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="row">
                <div id="info-block" style={{ width: '100%' }}>
                  <div className="file-marker">
                    <div>
                      <div
                        className="box-title"
                        style={{ fontSize: '1rem', fontWeight: '600' }}
                      >
                        Vay cá nhân
                      </div>
                      <div style={{ height: '10px' }} />
                      <div className="box-contents">
                        <div className="row align-content-center">
                          {listDataPersonal.map((data, key) => {
                            return (
                              <div
                                className="col-6 col-sm-4 col-md-3 col-lg-auto w-lg-1-7"
                                key={key}
                              >
                                <Link
                                  to={data.to}
                                  title={data.title}
                                  className="button grow"
                                  style={{ width: '115%' }}
                                >
                                  <img
                                    className="img-fluid mx-auto d-block w-50"
                                    src={data.src}
                                    alt={data.title}
                                  />
                                  {data.text}
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                        <div style={{ height: '10px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ height: '80px' }} />
              <div className="row">
                <div id="info-block" style={{ width: '100%' }}>
                  <div className="file-marker">
                    <div>
                      <div
                        className="box-title"
                        style={{ fontSize: '1rem', fontWeight: '600' }}
                      >
                        Vay cầm cố
                      </div>
                      <div style={{ height: '10px' }} />
                      <div className="box-contents">
                        <div className="row align-content-center">
                          {listDataMortgage.map((data, key) => {
                            return (
                              <div
                                className="col-6 col-sm-4 col-md-3 col-lg-auto w-lg-1-7"
                                key={key}
                              >
                                <Link
                                  to={data.to}
                                  title={data.title}
                                  className="button grow"
                                  style={{ width: '115%' }}
                                >
                                  <img
                                    className="img-fluid mx-auto d-block w-50"
                                    src={data.src}
                                    alt={data.title}
                                  />
                                  {data.text}
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                        <div style={{ height: '10px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ height: '80px' }} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
