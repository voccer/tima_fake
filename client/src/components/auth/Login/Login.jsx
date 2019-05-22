import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextInputAuth from '../../../HOC/TextInputAuth';
import { loginUser } from '../../../actions/auth.action';
import './Login.scss';
class Login extends Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      password: '',
      errors: {}
    };
  }
  componentWillReceiveProps(nextPops) {
    if (nextPops.auth.isAuthenticated) {
      this.props.history.push('/');
    }
    if (nextPops.errors) {
      this.setState({ errors: nextPops.errors });
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      phone: this.state.phone,
      password: this.state.password
    };
    console.log(userData);

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { phone, password, errors } = this.state;
    return (
      <div className="tm-reg">
        <div className="row gutter-10px flex-column-reverse flex-md-row">
          <div className="col-main col-md-6 d-flex">
            <div
              className="tm-reg__banner w-100"
              style={{
                backgroundImage:
                  'url(https://res.cloudinary.com/dz1gprgpn/image/upload/v1557046972/statics/bg-login_ayzs2e.jpg)'
              }}
            />
          </div>
          <div className="col-aside col-md-6 d-flex mb-5 mb-md-0">
            <div className="tm-regform d-flex flex-column justify-content-between w-100 border border-gray bg-white">
              <div className="fs-13" id="formLogin">
                <div className="tm-regform__header d-flex justify-content-between align-items-center p-3">
                  <h2>Đăng Nhập</h2>
                  <Link className="text-primary fs-13" to="/register">
                    <ins>Đăng ký tài khoản</ins>
                  </Link>
                </div>

                <form
                  id="loginForm"
                  noValidate
                  onSubmit={e => this.onSubmit(e)}
                >
                  <hr className="border-gray my-0" />
                  <div className="px-5 py-3">
                    <p className="text-center">
                      Chào bạn <br />
                      đăng nhập để xem và quản lý khoản vay
                      <br />
                      <span id="sp-message-login" />
                    </p>

                    <TextInputAuth
                      id="phone"
                      name="phone"
                      className="form-control form-control-lg rounded"
                      placeholder="Nhập số điện thoại"
                      title="Nhập số điện thoại"
                      type="input"
                      onChange={e => this.onChange(e)}
                      value={phone}
                    />
                    <TextInputAuth
                      id="password"
                      name="password"
                      className="form-control form-control-lg fs-13 px-3 rounded"
                      placeholder="Nhập mật khẩu"
                      title="Nhập mật khẩu"
                      type="password"
                      onChange={e => this.onChange(e)}
                      value={password}
                      error={errors.login}
                    />

                    <div className="form-group d-flex justify-content-between align-items-center">
                      <label className="custom-control custom-checkbox fs-13 mb-0">
                        <input
                          name="agree"
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <span className="custom-control-indicator" />
                        <span className="custom-control-description">
                          Nhớ tài khoản
                        </span>
                      </label>
                      <a className="text-primary fs-13" href="/">
                        Quên mật khẩu
                      </a>
                    </div>

                    <button className="btn btn-lg btn-block btn-warning text-uppercase fs-13 rounded mt-5">
                      Đăng nhập ngay
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <hr className="border-gray my-0" />

                <div className="text-center fs-13 p-3">
                  Bạn chưa có tài khoản?{' '}
                  <div className="d-inline-block">
                    Hãy{' '}
                    <Link className="text-primary" to="/register">
                      <ins style={{ color: '#ffc107', fontSize: '13px' }}>
                        đăng kí ngay bây giờ
                      </ins>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = { loginUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
