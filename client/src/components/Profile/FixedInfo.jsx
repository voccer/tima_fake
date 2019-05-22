import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const FixedInfo = props => {
  return (
    <div
      className="profilecard media bg-gray-lighter p-sm-4 p-3"
      style={{ marginBottom: '50px' }}
    >
      {/* <img
        className="profilecard__img wf-80 wf-md-126 mr-md-5 mr-3"
        style={{ cursor: 'pointer' }}
        src="https://rs.tima.vn/staticFile//img-avatar/2019/5/6038f62964e74074b91eeadb47cc9204_1_21644528.jpg"
        alt="avatar-san-tai-chinh-Thanh Lam"
        id="imgAvatar"
        title="Đổi ảnh đại diện khác"
      /> */}
      <input
        type="file"
        name="uploadAvatar"
        id="uploadAvatar"
        multiple=""
        style={{ display: 'none' }}
        accept="image/*"
      />

      <div className="profilecard__body media-body align-self-center">
        <div className="fs-13 text-gray-light mb-0">
          <div className="row">
            <div className="col-3">
              <span>Thông tin tài khoản</span>
            </div>
            {props.profile.user.typeOfAcc === 'loan' ? (
              <div className="col-9">
                <span
                  style={{ position: 'absolute', right: '5%' }}
                  className="hidden-xs-down"
                >
                  <Link
                    className="btn btn-warning text-uppercase text-white fs-15 fs-lg-15 btn-sm"
                    to="/purchasedhistory"
                  >
                    Lịch sử đơn vay
                  </Link>
                  <Link
                    to="/recharge"
                    className="btn btn-warning text-uppercase text-white fs-15 fs-lg-15 btn-sm"
                  >
                    <i className="fa fa-usd" aria-hidden="true" /> Nạp tiền
                  </Link>
                </span>
              </div>
            ) : (
              <div className="col-9">
                <span
                  style={{ position: 'absolute', right: '5%' }}
                  className="hidden-xs-down"
                >
                  <Link
                    className="btn btn-warning text-uppercase text-white fs-15 fs-lg-15 btn-sm"
                    to="/loanhistory"
                  >
                    Quản lý đơn vay
                  </Link>
                </span>
              </div>
            )}
          </div>
        </div>

        <hr className="mt-2 border-gray" />
        <div className="row  mb-4">
          <div className="col-md-6">
            <div className="row">
              <label className="col-sm-4 fs-13">Tên đăng nhập :</label>
              <label className="col-sm-4 fs-13">
                <b>{props.profile.user.phone}</b>
              </label>
            </div>
            <div className="row">
              <label className="col-sm-4 fs-13">
                Loại tài khoản
                <span style={{ marginLeft: '8px' }}>:</span>
              </label>
              <label className="col-sm-4 fs-13">
                {props.profile.user.typeOfAcc === 'loan' ? (
                  <b>Nhà đầu tư</b>
                ) : (
                  <b>Người vay</b>
                )}
              </label>
            </div>

            {props.profile.user.typeOfAcc === 'loan' ? (
              <div className="row">
                <label className="col-sm-4 fs-13">
                  Số dư<span style={{ marginLeft: '8px' }}>:</span>
                </label>
                <label className="col-sm-4 fs-13">
                  <b>
                    <a
                      href="/lich-su-giao-dich.html"
                      className="btn btn-warning text-uppercase text-white fs-15 fs-lg-15 btn-sm"
                    >
                      {props.profile.balance} VNĐ
                    </a>
                  </b>
                </label>
              </div>
            ) : null}

            <div className="row">
              <label className="col-sm-4 fs-13">
                Trạng thái
                <span style={{ marginLeft: '8px' }}>:</span>
              </label>
              <label className="col-sm-4 fs-13">
                <b>Tài khoản chưa được xác thực</b>
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="profilecard__progress">
              <p className="mb-0 text-gray-light fs-13">
                Bạn vui l&#242;ng cập nhật đầy đủ hồ sơ để kh&#225;ch h&#224;ng
                c&#243; thể kết nối được với bạn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedInfo;
