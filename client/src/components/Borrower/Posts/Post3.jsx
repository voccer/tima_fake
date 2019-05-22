/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextInputPost from '../../../HOC/TextInputPost';
import { updatePost } from '../../../actions/post.action';
import { getCurrentProfile } from '../../../actions/profile.action';
import { FormBorrow } from '../../../utils/getPackage';

export class Post3 extends Component {
  static propTypes = {
    updatePost: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      profileID: '',
      Lists: undefined,
      residence: '',
      originalDocs: '',
      borrowing: '',

      errors: {}
    };
  }

  componentDidMount() {
    this.props.getCurrentProfile();
    let Lists = FormBorrow[this.props.post.type];
    this.setState({ Lists });
    Lists &&
      this.setState({
        data: Lists.map(val => ({
          keyProp: val,
          valueProp: ''
        }))
      });
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
        profileID: profile._id
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    const postData = {
      property1: [...this.state.data],
      residence: this.state.residence,
      originalDocs: this.state.originalDocs,
      borrowing: this.state.borrowing
    };

    console.log(this.props.match.params.id);

    this.props.updatePost(
      postData,
      this.props.match.params.id,
      this.state.profileID,
      3,
      this.props.history
    );
  }
  render() {
    const {
      residence,
      originalDocs,
      borrowing,
      errors,
      Lists,
      data
    } = this.state;
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
            <div class="step-item active">
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
              <h2 className="box-2-title mb-md-0 mb-3">Thông tin tài sản</h2>

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
                    style={{ width: '55%' }}
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span className="progress-tooltip">55%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-2-body">
              {Lists &&
                Lists.map((val, key) => {
                  return (
                    <TextInputPost
                      key={key}
                      className1="col-lg-3 col-form-label col-form-label-lg text-nowrap"
                      title={val}
                      type="text"
                      className2="form-control form-control-lg"
                      id="comName"
                      name={val}
                      value={data.filter(a => a.keyProp === val)[0].valueProp}
                      error={errors.val}
                      onChange={e => {
                        const name = e.target.name;
                        const value = e.target.value;
                        return this.setState(pre => ({
                          data: [
                            ...pre.data.filter(a => a.keyProp !== val),
                            { keyProp: name, valueProp: value }
                          ]
                        }));
                      }}
                    />
                  );
                })}
              <div className="form-group row">
                <label
                  htmlFor="attr_1018"
                  className="col-lg-3 col-form-label col-form-label-lg text-nowrap"
                  style={{ fontSize: '18px' }}
                >
                  Hình thức cư trú
                </label>
                <div className="col-lg-9">
                  <select
                    className="form-control form-control-lg fs-13 px-3 rounded"
                    id="residence"
                    value={residence}
                    name="residence"
                    onChange={e => this.onChange(e)}
                  >
                    <option value="">Chọn Hình thức cư trú </option>
                    <option value="Ở nhà riêng"> Ở nhà riêng </option>
                    <option value="Ở với gia đình"> Ở với gia đình </option>
                    <option value="Nhà đi thuê"> Nhà đi thuê </option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="attr_1019"
                  className="col-lg-3 col-form-label col-form-label-lg text-nowrap"
                  style={{ fontSize: '18px' }}
                >
                  Có giấy tờ gốc hay không?
                </label>
                <div className="col-lg-9">
                  <select
                    className="form-control form-control-lg fs-13 px-3 rounded"
                    id="originalDocs"
                    value={originalDocs}
                    name="originalDocs"
                    onChange={e => this.onChange(e)}
                  >
                    <option value="">Chọn loại giấy tờ </option>
                    <option value="Có giấy tờ gốc"> Có giấy tờ gốc </option>
                    <option value="Giấy tờ photo"> Giấy tờ photo </option>
                    <option value="Không có"> Không có </option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="attr_1020"
                  className="col-lg-3 col-form-label col-form-label-lg text-nowrap"
                  style={{ fontSize: '18px' }}
                >
                  Bạn có đang vay ở đâu không?
                </label>
                <div className="col-lg-9">
                  <select
                    className="form-control form-control-lg fs-13 px-3 rounded"
                    id="borrowing"
                    value={borrowing}
                    name="borrowing"
                    onChange={e => this.onChange(e)}
                  >
                    <option value=""> Chọn hình thức đang vay </option>
                    <option value="Đang vay ngân hàng">
                      {' '}
                      Đang vay ngân hàng{' '}
                    </option>
                    <option value="Đang vay ngoài"> Đang vay ngoài </option>
                    <option value="Đang vay cty tài chính">
                      {' '}
                      Đang vay cty tài chính{' '}
                    </option>
                    <option value="Không vay ở đâu"> Không vay ở đâu </option>
                  </select>
                </div>
              </div>
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
  errors: state.errors,
  post: state.post,
  profile: state.profile
});

const mapDispatchToProps = { updatePost, getCurrentProfile };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post3);
