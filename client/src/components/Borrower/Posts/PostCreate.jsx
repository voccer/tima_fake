/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { getDistricts, getCities } from '../../../utils/getVNdata';
import TextInputPost from '../../../HOC/TextInputPost';
import { createPost } from '../../../actions/post.action';
import { getCurrentProfile } from '../../../actions/profile.action';
const Cities = getCities();
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();
const topProcess = [
  'ĐƠN VAY',
  'THÔNG TIN CÁ NHÂN',
  'VIỆC LÀM',
  'TÀI SẢN',
  'NGƯỜI THÂN',
  'HOÀN THÀNH'
];
class PostCreate extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    createPost: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      loanNumber: '',
      duration: '',
      province: '',
      district: '',
      errors: {}
    };
  }
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.profile.profile && nextProps.profile.profile.address) {
      this.setState({
        province: nextProps.profile.profile.address.province,
        district: nextProps.profile.profile.address.district
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const postData = {
      typeOfLoan: this.props.match.params.type.toUpperCase(),
      loanNumber: this.state.loanNumber,
      duration: this.state.duration,
      province: this.state.province,
      district: this.state.district
    };

    this.props.createPost(postData, this.props.history);
  }
  render() {
    const { profile } = this.props.profile;
    const { loanNumber, duration, errors, province, district } = this.state;
    const { user } = this.props.auth;

    return (
      <div className="w-xl-85 mx-auto">
        <div className="w-85 w-lg-66 mx-auto pb-6">
          <div style={{ height: '25px' }} />
          <div className="step">
            {topProcess.map((text, index) => {
              return (
                <div
                  className={classnames('step-item active', {
                    active: 3 === index
                  })}
                  key={index}
                >
                  <div className="step-item-text text-uppercase">{text}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="box-2 mb-3">
          <div className="box-2-header d-flex flex-column flex-md-row">
            <div className="align-self-md-center ml-md-auto">
              <p
                className="fs-12 text-gray-light mb-1"
                style={{ fontSize: '20px', fontWeight: '600' }}
              >
                Khả năng nhận được khoản vay
              </p>

              <div className="progress progress-style-1">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '0%' }}
                  aria-valuenow="00"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span className="progress-tooltip">0%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="box-2-body">
            <form id="signupForm" noValidate onSubmit={e => this.onSubmit(e)}>
              <div
                className="tm-cv__body bg-white fs-14"
                style={{ width: 'auto', height: 'auto' }}
              >
                <div className="p-lg-5 p-3">
                  <div className="row">
                    <div className="col-md-8 mb-3 mb-md-0">
                      <div style={{ height: '15px' }} />

                      <TextInputPost
                        className1="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                        title="Số tiền"
                        type="number"
                        className2="form-control form-control-lg"
                        id="loanNumber"
                        name="loanNumber"
                        placeholder="Từ 5 đến 100 triệu đồng ( Đơn vị: Triệu đồng )"
                        value={loanNumber}
                        error={errors.loanNumber}
                        onChange={e => this.onChange(e)}
                        infos=""
                      />
                      <TextInputPost
                        className1="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                        title="Thời hạn"
                        type="number"
                        className2="form-control form-control-lg"
                        id="duration"
                        name="duration"
                        placeholder="Thời hạn tối thiểu là 1 tháng ( Đơn vị: tháng )"
                        value={duration}
                        error={errors.duration}
                        onChange={e => this.onChange(e)}
                        infos=""
                      />

                      <p
                        className="text-gray"
                        style={{
                          fontSize: '12px',
                          marginBottom: '.23438rem!important',
                          fontWeight: '500',
                          marginLeft: '125px'
                        }}
                      >
                        Hỗ trợ tài chính tư vấn gói vay lên đến 100 triệu.{' '}
                        <br />
                        Kỳ hạn thanh toán lên đến 10 năm. Kỳ thanh toán 10, 15
                        hoặc 30 ngày KH tùy chọn.
                        <br />
                        Chi tiết liên hệ:
                        <a className="text-gray"> 0123 456 789</a>
                      </p>

                      <div
                        style={{
                          fontSize: '15px',
                          color: '#ffbb38',
                          marginLeft: '125px'
                        }}
                        className="text-gray mb-3"
                      >
                        <input
                          type="checkbox"
                          name="chkDieuKhoan"
                          id="chkDieuKhoan"
                        />
                        <label htmlFor="chkDieuKhoan">
                          {' '}
                          <a
                            href="/Dieu-Khoan-Nguoi-Vay.html"
                            style={{
                              marginLeft: '10px',
                              color: '#ffbb38'
                            }}
                          >
                            {' '}
                            Điều khoản
                          </a>{' '}
                          đăng ký khoản vay{' '}
                        </label>
                      </div>
                    </div>

                    <div className="col-md-4 d-flex flex-column">
                      <div style={{ height: '20px' }} />
                      <div className="form-group mb-2">
                        <input
                          className="form-control fs-14"
                          type="text"
                          placeholder="Họ và tên"
                          name="application_full_name"
                          id="application_full_name"
                          readOnly
                          value={user && user.fullname}
                          disabled
                        />
                      </div>

                      <div className="form-group mb-2">
                        <input
                          className="form-control fs-14"
                          type="tel"
                          placeholder="Số điện thoại"
                          disabled
                          value={
                            profile && profile.user && profile.user.phone
                              ? profile.user.phone
                              : ''
                          }
                        />
                      </div>

                      <div className="form-group">
                        <select
                          className="form-control form-control-lg fs-13 px-3 rounded"
                          id="province"
                          name="province"
                          onChange={e => this.onChange(e)}
                          value={province}
                        >
                          {Cities.map((city, index) => {
                            return (
                              <option key={index} value={city[0]}>
                                {city[1]}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="form-group">
                        <select
                          className="select optional form-control input-lg fs-14"
                          id="district"
                          name="district"
                          onChange={e => this.onChange(e)}
                          value={district}
                        >
                          {province &&
                            getDistricts(province).map((dis, index) => {
                              return (
                                <option key={index} value={dis[0]}>
                                  {dis[1]}
                                </option>
                              );
                            })}
                        </select>
                      </div>

                      <div className="input-group mb-0">
                        <button
                          type="submit"
                          className="btn btn-lg btn-block btn-warning rounded text-uppercase fs-14 py-3"
                        >
                          <span className="d-flex align-items-center justify-content-between">
                            <i />
                            <span>Vay ngay</span>
                            <i className="icon-angle-right" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-lightest text-gray-light">
                  <div className="row no-gutters border-top">
                    <div className="col-sm-6 text-center border-right py-10px">
                      Khoản vay
                      <div className="fs-18 fw-6">
                        <span id="slider-num-3">
                          {loanNumber ? loanNumber : '0'}
                        </span>{' '}
                        Triệu đồng
                      </div>
                    </div>

                    <div className="col-sm-6 text-center border-right py-10px">
                      Ngày đăng kí vay
                      <div className="fs-18 fw-6">
                        <span className="text-gray-dark" id="payDate">
                          {day}.{month}.{year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

const mapDispatchToProps = {
  createPost,
  getCurrentProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCreate);
