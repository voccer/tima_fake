import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Statistic(props) {
  const { statistic } = props;

  return (
    <div className="row mb-5">
      <div className="col-xl-9 mb-3 mb-xl-0">
        <div className="bg-white border border-gray p-3 px-md-5 pb-md-5 pt-md-4">
          <h2 className="tm-account__header text-uppercase fs-16 fw-6 mb-0">
            Thống kê trên toàn hệ thống
          </h2>

          <hr className="mb-3 mb-md-5" />

          <div className="row" id="divStatics">
            <div className="col-md-4 d-flex mb-3 mb-md-0">
              <div className="media w-100">
                <div className="icon-vnd-circle d-flex mr-3 align-self-center" />
                <div className="media-body align-self-center">
                  <h3 className="fs-14 fs-lg-16 fw-6 text-gray-light mb-0 mt-1">
                    Tổng tiền cho vay
                  </h3>
                  <p className="fs-16 fs-lg-20 fw-6 text-gray mb-0">
                    {statistic.money && `${statistic.money}.000.000 VNĐ`}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-flex mb-3 mb-md-0">
              <div className="media w-100">
                <div className="icon-users-circle d-flex mr-3 align-self-center" />
                <div className="media-body align-self-center">
                  <h3 className="fs-14 fs-lg-16 fw-6 text-gray-light mb-0 mt-1">
                    Tổng số người vay
                  </h3>
                  <p className="fs-16 fs-lg-20 fw-6 text-gray mb-0">
                    {statistic.borrow && statistic.borrow}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-flex">
              <div className="media w-100">
                <div className="icon-growth-circle d-flex mr-3 align-self-center" />
                <div className="media-body align-self-center">
                  <h3 className="fs-14 fs-lg-16 fw-6 text-gray-light mb-0 mt-1">
                    Tổng số người cho vay
                  </h3>
                  <p className="fs-16 fs-lg-20 fw-6 text-gray mb-0">
                    {statistic.loan && statistic.loan}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 d-flex">
        <div className="d-flex align-items-center justify-content-center w-100 bg-white border border-gray p-3 p-md-5">
          <Link
            className="btn btn-warning text-uppercase text-white fs-16 fs-lg-20"
            to="/loanmanagement"
          >
            Quản lý đơn vay
          </Link>
        </div>
      </div>
    </div>
  );
}

Statistic.propTypes = {
  statistic: PropTypes.object.isRequired
};

export default Statistic;
