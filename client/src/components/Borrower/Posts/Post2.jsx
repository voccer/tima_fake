/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextInputPost from '../../../HOC/TextInputPost';
import { updatePost } from '../../../actions/post.action';
import { getCurrentProfile } from '../../../actions/profile.action';

export class Post2 extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    updatePost: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      profileID: '',
      career: '',
      income: '',
      comName: '',
      comAddress: '',
      comPhone: '',
      bankName: '',
      bankID: '',
      errors: {}
    };
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      // console.log(nextProps.errors);
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile && nextProps.profile.profile) {
      const { profile } = nextProps.profile;
      // console.log(profile);
      this.setState({
        profileID: profile._id,
        career:
          profile.careerInfo &&
          profile.careerInfo.career &&
          profile.careerInfo.career,
        income:
          profile.careerInfo &&
          profile.careerInfo.income &&
          profile.careerInfo.income,
        comName:
          profile.careerInfo &&
          profile.careerInfo.comName &&
          profile.careerInfo.comName,
        comAddress:
          profile.careerInfo &&
          profile.careerInfo.comAddress &&
          profile.careerInfo.comAddress,
        comPhone:
          profile.careerInfo &&
          profile.careerInfo.comPhone &&
          profile.careerInfo.comPhone,
        bankName:
          profile.bank && profile.bank.bankName && profile.bank.bankName,
        bankID: profile.bank && profile.bank.bankID && profile.bank.bankID
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const postData = {
      career: this.state.career,
      income: this.state.income,
      comName: this.state.comName,
      comAddress: this.state.comAddress,
      comPhone: this.state.comPhone,
      bankName: this.state.bankName,
      bankID: this.state.bankID
    };
    // console.log(postData);
    // console.log(this.props.match.params.id);

    this.props.updatePost(
      postData,
      this.props.match.params.id,
      this.state.profileID,
      2,
      this.props.history
    ); //chưa update server
  }
  render() {
    const {
      career,
      income,
      comName,
      comAddress,
      comPhone,
      bankName,
      bankID,
      errors
    } = this.state;
    return (
      <div className="w-xl-85 mx-auto">
        <div class="w-85 w-lg-66 mx-auto pb-6">
          <div style={{ height: '25px' }} />
          <div class="step">
            <div class="step-item ">
              <div class="step-item-text text-uppercase">THÔNG TIN CÁ NHÂN</div>
            </div>
            <div class="step-item active">
              <div class="step-item-text text-uppercase">VIỆC LÀM</div>
            </div>
            <div class="step-item ">
              <div class="step-item-text text-uppercase">TÀI SẢN</div>
            </div>
            <div class="step-item ">
              <div class="step-item-text text-uppercase">NGƯỜI THÂN</div>
            </div>
            <div class="step-item ">
              <div class="step-item-text text-uppercase">HOÀN THÀNH</div>
            </div>
          </div>
        </div>
        <form id="signupForm" noValidate onSubmit={e => this.onSubmit(e)}>
          <div className="box-2 mb-3">
            <div className="box-2-header d-flex flex-column flex-md-row">
              <h2 className="box-2-title mb-md-0 mb-3">Thông tin việc làm</h2>

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
                    style={{ width: '40%' }}
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span className="progress-tooltip">40%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-2-body">
              <div className="form-group row">
                <label
                  htmlFor="fc-1"
                  className="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                  style={{ fontSize: '18px' }}
                >
                  Nghề nghiệp
                </label>
                <div className="col-lg-10">
                  <select
                    className="form-control form-control-lg fs-13 px-3 rounded"
                    id="career"
                    value={career}
                    name="career"
                    onChange={e => this.onChange(e)}
                  >
                    <option value="Nhân viên văn phòng">
                      {' '}
                      Nhân viên văn phòng{' '}
                    </option>
                    <option value="Nhân viên nhà nước">
                      {' '}
                      Nhân viên nhà nước{' '}
                    </option>
                    <option value="Kinh doanh tự do"> Kinh doanh tự do </option>
                    <option value="Công nhân nhà máy">
                      {' '}
                      Công nhân nhà máy{' '}
                    </option>
                    <option value="Doanh nghiệp tư nhân">
                      {' '}
                      Doanh nghiệp tư nhân{' '}
                    </option>
                    <option value="Hộ kinh doanh cá thể">
                      {' '}
                      Hộ kinh doanh cá thể{' '}
                    </option>
                    <option value="Ngành nghề khác"> Ngành nghề khác </option>
                  </select>
                </div>
              </div>
              <TextInputPost
                className1="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                title="Tên công ty"
                type="text"
                className2="form-control form-control-lg"
                id="comName"
                name="comName"
                placeholder="Tên công ty"
                value={comName}
                error={errors.comName}
                onChange={e => this.onChange(e)}
              />
              <TextInputPost
                className1="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                title=" Địa chỉ công ty"
                type="text"
                className2="form-control form-control-lg"
                id="comAddress"
                name="comAddress"
                placeholder="Địa chỉ công ty"
                value={comAddress}
                error={errors.comAddress}
                onChange={e => this.onChange(e)}
              />
              <TextInputPost
                className1="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                title=" SĐT công ty"
                type="text"
                className2="form-control form-control-lg"
                id="comPhone"
                name="comPhone"
                placeholder="Số điện thoại công ty"
                value={comPhone}
                error={errors.comPhone}
                onChange={e => this.onChange(e)}
              />
              <TextInputPost
                className1="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                title="Thu nhập"
                type="text"
                className2="form-control form-control-lg"
                id="income"
                name="income"
                placeholder="Đơn vị VND"
                value={income}
                error={errors.income}
                onChange={e => this.onChange(e)}
              />

              <div className="form-group row">
                <label
                  htmlFor="fc-2"
                  className="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                  style={{ fontSize: '18px' }}
                >
                  Tên ngân hàng <br />
                  nhận giải ngân
                </label>
                <div className="col-lg-10">
                  <select
                    className="form-control form-control-lg fs-13 px-3 rounded"
                    id="bankName"
                    value={bankName}
                    name="bankName"
                    onChange={e => this.onChange(e)}
                  >
                    <option value="ACB"> ACB - NH TMCP A CHAU </option>
                    <option value="AGRIBANK">
                      {' '}
                      AGRIBANK - NH NO VA PT NT VN{' '}
                    </option>
                    <option value="ABBBANK">
                      {' '}
                      AN BINH - NH TMCP AN BINH (ABBBANK){' '}
                    </option>
                    <option value="ANZ">
                      {' '}
                      ANZ - AUSTRALIA &amp;amp; ZEALAND BANKING VN{' '}
                    </option>
                    <option value="NASB"> BAC A - NH TMCP BAC A (NASB) </option>
                    <option value="VIETCAPITALBANK">
                      {' '}
                      BAN VIET - NH TMCP BAN VIET(VIETCAPITALBANK){' '}
                    </option>
                    <option value="BANKNET"> BANKNET - BANKNET </option>
                    <option value="BVB">
                      {' '}
                      BAO VIET - NH TMCP BAO VIET (BVB){' '}
                    </option>
                    <option value="BCB">
                      {' '}
                      BCB - BANK OF COMMUNICATIONS CN HCM{' '}
                    </option>
                    <option value="BIDV"> BIDV - NH TMCP DT VA PT VN </option>
                    <option value="BIDVC HN">
                      {' '}
                      BIDVC - NH DT VA PT CAMPUCHIA CN HN{' '}
                    </option>
                    <option value="BIDVC HCM">
                      {' '}
                      BIDVC - NH DT VA PT CAMPUCHIA CN HCM{' '}
                    </option>
                  </select>
                  <small className="form-text text-muted">
                    Nếu chưa có tài khoản ngân hang, quý khách vui long tạo tài
                    khoản tại ngân hàng gần nhất để nhận được khoản vay nhanh
                    nhất.
                  </small>
                </div>
              </div>
              <TextInputPost
                className1="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                title="Số tài khoản"
                type="number"
                className2="form-control form-control-lg"
                id="bankID"
                name="bankID"
                placeholder="Số tài khoản/ Số thẻ"
                value={bankID}
                error={errors.bankID}
                onChange={e => this.onChange(e)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            {/* <a
              className="btn btn-lg btn-gray-lighter px-md-6"
              style={{
                backgroundColor: '#d1d1d1',
                fontSize: '14px',
                marginBottom: '25px'
              }}
            >
              QUAY LẠI
            </a> */}
            <button
              type="submit"
              className="btn btn-lg btn-warning text-white px-md-6 ml-auto"
              style={{ fontSize: '14px', marginBottom: '25px' }}
            >
              TIẾP TỤC
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

const mapDispatchToProps = { getCurrentProfile, updatePost };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post2);
