/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updatePost } from '../../../actions/post.action';
import { getCurrentProfile } from '../../../actions/profile.action';
import IdentificationPhoto from './Sub/IdentificationPhoto';
import HouseholdPhoto from './Sub/HouseholdPhoto';
import PropertyPhoto from './Sub/PropertyPhoto';
import IncomePhoto from './Sub/IncomePhoto';

export class Post5 extends Component {
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

  render() {
    const { profile } = this.props.profile;
    const id = this.props.match.params.id;
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
            <div class="step-item ">
              <div class="step-item-text text-uppercase">NGƯỜI THÂN</div>
            </div>
            <div class="step-item active">
              <div class="step-item-text text-uppercase">HOÀN THÀNH</div>
            </div>
          </div>
        </div>
        <div class="box-2 mb-3">
          <div class="box-2-header d-flex flex-column flex-md-row">
            <h2 class="box-2-title mb-md-0 mb-3">Tải ảnh CMND</h2>

            <div class="align-self-md-center ml-md-auto">
              <p
                class="fs-12 text-gray-light mb-1"
                style={{ fontSize: '20px', fontWeight: '600' }}
              >
                Khả năng nhận được khoản vay
              </p>

              <div class="progress progress-style-1">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: '100%' }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span class="progress-tooltip">100%</span>
                </div>
              </div>
            </div>
          </div>

          <input type="hidden" id="hddTypeImg" value="0" />
          <input
            type="file"
            name="uploadImg"
            id="uploadImg"
            multiple=""
            style={{ display: 'none' }}
            accept="image/*"
          />

          <div class="uploadct bg-white p-md-5 pt-md-4 p-3">
            <h2
              class="text-uppercase fs-16 fw-6 mb-0"
              style={{ fontSize: '30px', fontWeight: '600' }}
            >
              Upload chứng từ
            </h2>

            <hr class="border-gray mt-md-4 mt-3 mb-0" />

            <IdentificationPhoto profile={profile} id={id} />
            <HouseholdPhoto profile={profile} id={id} />
            <PropertyPhoto profile={profile} id={id} />
            <IncomePhoto profile={profile} id={id} />
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
          <Link
            className="btn btn-lg btn-warning text-white px-md-6 ml-auto"
            style={{ fontSize: '14px', marginBottom: '25px' }}
            to="/borrower/success"
          >
            HOÀN THÀNH
          </Link>
        </div>
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
)(Post5);
