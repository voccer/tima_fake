/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextInputPost from '../../../HOC/TextInputPost';
import { updatePost } from '../../../actions/post.action';
import { getCurrentProfile } from '../../../actions/profile.action';

export class Post4 extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    updatePost: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      profileID: '',
      relName: '',
      whatRels: '',
      relPhone: '',
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
        relName:
          profile.relatives &&
          profile.relatives.relName &&
          profile.relatives.relName,
        whatRels:
          profile.relatives &&
          profile.relatives.whatRels &&
          profile.relatives.whatRels,
        relPhone:
          profile.relatives &&
          profile.relatives.relPhone &&
          profile.relatives.relPhone
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const postData = {
      relName: this.state.relName,
      whatRels: this.state.whatRels,
      relPhone: this.state.relPhone
    };
    console.log(postData);
    console.log(this.props.match.params.id);

    this.props.updatePost(
      postData,
      this.props.match.params.id,
      this.state.profileID,
      4,
      this.props.history
    ); //chưa update server
  }
  render() {
    const { relName, whatRels, relPhone, errors } = this.state;
    return (
      <div className="w-xl-85 mx-auto">
        <div class="w-85 w-lg-66 mx-auto pb-6">
          <div style={{ height: '25px' }} />
          <div class="step">
            <div class="step-item ">
              <div class="step-item-text text-uppercase">THÔNG TIN CÁ NHÂN</div>
            </div>
            <div class="step-item ">
              <div class="step-item-text text-uppercase">VIỆC LÀM</div>
            </div>
            <div class="step-item ">
              <div class="step-item-text text-uppercase">TÀI SẢN</div>
            </div>
            <div class="step-item active">
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
              <h2 className="box-2-title mb-md-0 mb-3">Thông tin người thân</h2>

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
                    style={{ width: '75%' }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span className="progress-tooltip">75%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-2-body">
              <TextInputPost
                className1="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                title="Họ và tên"
                type="text"
                className2="form-control form-control-lg"
                id="relName"
                name="relName"
                placeholder="Họ và tên"
                value={relName}
                error={errors.relName}
                onChange={e => this.onChange(e)}
              />
              <div className="form-group row">
                <label
                  htmlFor="fc-2"
                  className="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                  style={{ fontSize: '18px' }}
                >
                  Quan hệ nhân thân
                </label>
                <div className="col-lg-10">
                  <select
                    id="whatRels"
                    value={whatRels}
                    name="whatRels"
                    onChange={e => this.onChange(e)}
                    className="form-control form-control-lg fs-13 px-3 rounded"
                  >
                    <option value=""> Quan hệ thân nhân </option>
                    <option value="Chồng / Vợ "> Chồng / Vợ </option>
                    <option value="Mẹ"> Mẹ </option>
                    <option value="Bố"> Bố </option>
                    <option value="Anh / Em trai"> Anh / Em trai </option>
                    <option value="Chị / Em gái"> Chị / Em gái </option>
                  </select>
                </div>
              </div>
              <TextInputPost
                className1="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                title="Số điện thoại"
                type="number"
                className2="form-control form-control-lg"
                id="relPhone"
                name="relPhone"
                placeholder="Số điện thoại người thân"
                value={relPhone}
                error={errors.relPhone}
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
)(Post4);
