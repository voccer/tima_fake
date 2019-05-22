import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextInputPost from '../../../HOC/TextInputPost';
import { fakeRecharge } from '../../../actions/profile.action';
import './Recharge.scss';
export class Recharge extends Component {
  static propTypes = {
    fakeRecharge: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      seriCard: '',
      errors: ''
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const { seriCard } = this.state;
    console.log(seriCard);
    this.props.fakeRecharge({ amount: seriCard }, this.props.history);
  }
  render() {
    const { seriCard, errors } = this.state;
    return (
      <div className="container py-5">
        <form id="signupForm" noValidate onSubmit={e => this.onSubmit(e)}>
          <div className="bg-white border border-gray p-3 px-md-5 pb-md-5 pt-md-4">
            <h2 className="text-uppercase fs-16 fw-6 mb-5">
              CHỌN hình thức thanh toán
            </h2>
            <div className="radiolist">
              <div className="form-group mb-5">
                <div className="radiolist__item custom-control custom-radio w-100 mr-0">
                  <input
                    id="httt-rdo-2"
                    name="radio"
                    value="2"
                    defaultChecked
                    type="radio"
                    className="radiolist__control-input custom-control-input"
                  />
                  <label
                    htmlFor="httt-rdo-2"
                    className="custom-control-indicator"
                  />
                  <label
                    htmlFor="httt-rdo-2"
                    className="custom-control-description"
                  >
                    Thanh toán bằng tự chuyển khoản <br />
                    <em className="small form-text text-muted mt-0">
                      Quý khách sẽ nạp tiền qua số tài khoản của Công Ty
                    </em>
                  </label>
                  <div className="radiolist__body mt-3">
                    <div className="table-responsive">
                      <table className="table table-bordered table-sm fs-13 fw-6">
                        <thead>
                          <tr>
                            <th className="text-nowrap fw-6">Ngân hàng</th>
                            <th className="text-nowrap fw-6">Số tài khoản</th>
                            <th className="text-nowrap text-center fw-6">
                              Chủ tài khoản
                            </th>
                            <th className="text-nowrap text-center fw-6">
                              Nội dung chuyển khoản
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td rowSpan="true">
                              Vietcombank Chi nhánh Thanh Xuân
                            </td>
                            <td>0711000281624</td>
                            <td
                              rowSpan="6"
                              className="align-middle text-center"
                            >
                              <span className="text-uppercase">
                                Công ty cổ phần Tập đoàn TIMA
                              </span>
                            </td>
                            <td
                              rowSpan="6"
                              className="align-middle text-center"
                            >
                              <span className="text-uppercase">
                                SNT [seriCard]
                              </span>
                              <em className="small form-text text-muted mt-0">
                                (Thay "[seriCard]" bằng tài khỏan đăng nhập của
                                bạn)
                              </em>
                            </td>
                          </tr>

                          <tr>
                            <td rowSpan="true">BIDV - CN Thái Hà</td>
                            <td>26810000300978</td>
                          </tr>

                          <tr>
                            <td rowSpan="true">Sacombank - CN Đống Đa</td>
                            <td>020066557996</td>
                          </tr>

                          <tr>
                            <td rowSpan="true">VPbank - CN Hà Thành</td>
                            <td>165885996</td>
                          </tr>
                          <tr>
                            <td rowSpan="true">Agribank - CN Đống Đa</td>
                            <td>1504201036710</td>
                          </tr>
                        </tbody>
                      </table>
                      <em className="small form-text text-muted mt-0">
                        *Với hình thức này sau khi nhận được tiền hệ thống sẽ xử
                        lý cộng tiền vào tài khoản của bạn trong thời gian nhanh
                        nhất
                      </em>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group mb-5">
                <div className="radiolist__item custom-control custom-radio w-100 mr-0">
                  <input
                    id="httt-rdo-3"
                    value="3"
                    name="radio"
                    type="radio"
                    className="radiolist__control-input custom-control-input"
                  />
                  <label
                    htmlFor="httt-rdo-3"
                    className="custom-control-indicator"
                  />
                  <label
                    htmlFor="httt-rdo-3"
                    className="custom-control-description"
                  >
                    Nạp tiền với Payoo / Momo <br />
                    <em className="small form-text text-muted mt-0">
                      Quý khách sẽ nạp tiền qua số tài khoản Payoo / Momo của
                      Công Ty
                    </em>
                  </label>
                  <div className="radiolist__body mt-3">
                    <div className="table-responsive">
                      <table className="table table-bordered table-sm fs-13 fw-6">
                        <thead>
                          <tr>
                            <th className="text-nowrap fw-6">Hình thức</th>
                            <th className="text-nowrap fw-6">Tài khoản</th>
                            <th className="text-nowrap text-center fw-6">
                              Chủ tài khoản
                            </th>
                            <th className="text-nowrap text-center fw-6">
                              Nội dung chuyển khoản
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td rowSpan="true">Payoo</td>
                            <td>timapay</td>
                            <td
                              rowSpan="6"
                              className="align-middle text-center"
                            >
                              <span className="text-uppercase">
                                Pham Van Linh
                              </span>
                            </td>
                            <td
                              rowSpan="6"
                              className="align-middle text-center"
                            >
                              <span className="text-uppercase">
                                SNT [seriCard]
                              </span>
                              <em className="small form-text text-muted mt-0">
                                (Thay "[seriCard]" bằng tài khỏan đăng nhập của
                                bạn)
                              </em>
                            </td>
                          </tr>

                          <tr>
                            <td rowSpan="true">MOMO</td>
                            <td>0967835078</td>
                          </tr>
                        </tbody>
                      </table>
                      <em className="small form-text text-muted mt-0" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group mb-5 disable">
                <div className="radiolist__item custom-control custom-radio w-100 mr-0">
                  <input
                    id="httt-rdo-4"
                    name="radio"
                    value="4"
                    type="radio"
                    className="radiolist__control-input custom-control-input"
                  />
                  <label
                    htmlFor="httt-rdo-4"
                    className="custom-control-indicator"
                  />
                  <label
                    htmlFor="httt-rdo-4"
                    className="custom-control-description"
                  >
                    Thanh toán tiền bằng thẻ điện thoại <br />
                    <em className="small form-text text-muted mt-0">
                      Quý khách sử dụng mã thẻ điện thoại để nạp tiền
                    </em>
                  </label>

                  <div className="radiolist__body mt-5">
                    <TextInputPost
                      id="seriCard"
                      name="seriCard"
                      className="form-control w-md-50 valid"
                      placeholder="Mã thẻ nạp"
                      type="number"
                      onChange={e => this.onChange(e)}
                      value={seriCard}
                      error={errors.seriCard}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center mt-6 ">
                <button
                  id="btnNapNgay"
                  type="submit"
                  className="btn btn-lg btn-warning fs-16 text-uppercase mb-2 px-8 cursor-pointer"
                >
                  NẠP TIỀN
                </button>
                <em className="small form-text text-muted mt-0">
                  (Xin vui lòng kiểm tra lại thông tin chuyển tiền trước khi nạp
                  tiền)
                </em>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = { fakeRecharge };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recharge);
