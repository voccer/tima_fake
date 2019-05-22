import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { lookUpUser } from '../../actions/statistic.action';
import { getCurrentProfile } from '../../actions/profile.action';
import Notifications, { notify } from 'react-notify-toast';
import TableData from '../../HOC/TableData';
class LookupUser extends Component {
  static propTypes = {
    lookUpUser: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      CMND: '',
      profile: {},
      errors: {}
    };
    this.toast = notify.createShowQueue();
  }
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  componentWillReceiveProps(newProps) {
    if (newProps.statistic) {
      this.setState({ posts: newProps.statistic.lookup });
    }
    if (newProps.profile) {
      this.setState({ profile: newProps.profile.profile });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    const { phone, CMND, profile } = this.state;
    e.preventDefault();
    if (profile.balance < 10000) {
      this.toast(
        'Bạn không đủ tiền, vui lòng nạp thêm tiền vào tài khoản',
        'warning',
        3000
      );
    } else {
      if (phone !== '' && CMND !== '') {
        this.toast(
          'Bạn chỉ có thể tìm kiếm bằng số điện thoại hoặc số CMND',
          'warning',
          2500
        );
        this.setState({ phone: '', CMND: '' });
      }
      if (phone === '' && CMND === '') {
        this.toast('Vui lòng nhập số điện thoại hoặc số CMND', 'warning', 2500);
      }
      if (phone !== '' && CMND === '') {
        this.props.lookUpUser({ data: phone }, 'PHONE');
      }
      if (CMND !== '' && phone === '') {
        this.props.lookUpUser({ data: CMND }, 'CMND');
      }
    }
  }
  render() {
    const { phone, CMND, posts, profile } = this.state;
    return (
      <div className="container py-5">
        <Notifications options={{ zIndex: 200, top: '126px' }} />
        <div className="tm-about bg-white py-5 py-md-5 py-xl-6 px-xl-0">
          <div className="px-3 px-md-5 px-xl-8 w-lg-75 mx-auto">
            <h3 className="text-center fw-3 fs-30 mb-3">
              Chức năng tra cứu lịch sử vay nợ
            </h3>
            <div className="text-gray-light mb-2 fs-14">
              Tính năng này giúp cho bạn biết được KH đã vay mượn ở đâu hay
              chưa? Tình trạng của các khoản vay đó như thế nào? Từ đó, giúp cho
              Bạn và Người Đang Cho Vay tránh được rủi ro nợ xấu không đáng có
            </div>
            <div className="text-gray-light mb-5 fs-14 text-center">
              Phí <span className="badge badge-success fs-12">10.000đ</span> cho
              mỗi lần kiểm tra thành công!
            </div>

            <form noValidate onSubmit={e => this.onSubmit(e)}>
              <div className="row mb-4 text-gray-light flex-column flex-sm-row">
                <div className="col-sm-5 form-group mb-10">
                  <label htmlFor="search-fc-1">Số điện thoại:</label>
                  <div className="md-style md-style-icon">
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Nhập số điện thoại"
                      value={phone}
                      onChange={e => this.onChange(e)}
                    />
                  </div>
                </div>
                <div className="col-sm-2 hidden-xs-down d-flex align-items-center justify-content-center px-4 py-5 pb-sm-0">
                  Hoặc
                </div>
                <div className="col-sm-4 form-group mb-10">
                  <label htmlFor="search-fc-2">Số CMND:</label>
                  <div className="md-style md-style-icon">
                    <input
                      type="number"
                      className="form-control"
                      name="CMND"
                      id="CMND"
                      placeholder="Nhập số CMND"
                      value={CMND}
                      onChange={e => this.onChange(e)}
                    />
                  </div>
                </div>
              </div>
              {profile && Object.keys(profile).length > 0 && (
                <button
                  type="submit"
                  className="btn btn-lg btn-block btn-warning justify-content-center align-items-center"
                >
                  Tìm kiếm
                </button>
              )}
            </form>
          </div>
          <hr className="my-6" />
          <div className="px-3 px-md-5 px-xl-8" id="CICResult" />
        </div>

        {posts && Object.keys(posts).length > 0 && (
          <TableData posts={posts} title={`DANH SÁCH ĐƠN XIN VAY`} />
        )}
        {posts && Object.keys(posts).length === 0 && (
          <div class="table-responsive">
            <h3 class="text-center border py-3" style={{ color: '#ed522e' }}>
              Số điện thoại hoắc số CMND không đúng
              <br />
              Hoặc người dùng này chưa có đơn vay nào.
            </h3>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  statistic: state.statistic,
  profile: state.profile
});

const mapDispatchToProps = {
  lookUpUser,
  getCurrentProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LookupUser);
