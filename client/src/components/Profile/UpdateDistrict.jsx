import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDistricts } from '../../utils/getVNdata';
import { updateProfile } from '../../actions/profile.action';
import Notifications, { notify } from 'react-notify-toast';
class UpdateDistrict extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    updateProfile: PropTypes.func.isRequired
  };
  toast = notify.createShowQueue();
  constructor(props) {
    super(props);

    this.state = {
      reciveDistrict: ''
    };
  }
  componentDidMount() {
    const { reciveDistrict } = this.props.profile;
    this.setState({ reciveDistrict });
    this.mySet = new Set(reciveDistrict);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    if (e.target.checked) {
      this.mySet.add(e.target.value);
    } else {
      this.mySet.delete(e.target.value);
    }
    this.setState({ reciveDistrict: [...this.mySet] });
  }
  onSubmit(e) {
    e.preventDefault();
    const { reciveDistrict } = this.state;

    this.props.updateProfile('loan/update/reciveDistrict', { reciveDistrict });
    const msg = 'Cập nhật quận huyện nhận đơn thành công.';
    this.toast(msg, 'warning', 3000);
  }
  render() {
    const { reciveDistrict } = this.state;
    return (
      <div
        className="tm-dtcv bg-white p-3 px-md-5 pb-md-5 pt-md-4"
        id="editDistrictSpice"
      >
        <Notifications options={{ zIndex: 200, top: '10px' }} />
        <form noValidate onSubmit={e => this.onSubmit(e)}>
          <h2
            className="text-uppercase fs-16 fw-6 mb-0"
            id="idDistrictShowSpice"
          >
            Các quận huyện bạn nhận hồ sơ
          </h2>

          <hr className="mb-3" />
          <div className="districtDiv form-group row">
            <div className="row">
              {getDistricts(this.props.profile.address.province).map(
                (val, key) => {
                  return (
                    <label className="custom-control col-md-5" key={key}>
                      <input
                        value={val[0]}
                        name={val[0]}
                        type="checkbox"
                        className="custom-control-input"
                        onChange={e => this.onChange(e)}
                        checked={reciveDistrict.indexOf(val[0]) !== -1}
                      />
                      <span className="custom-control-indicator" />
                      <span
                        className="custom-control-description"
                        style={{ fontSize: '17px' }}
                      >
                        {val[1]}
                      </span>
                    </label>
                  );
                }
              )}
            </div>
          </div>
          <div className="form-group">
            <div className="text-center">
              <input
                type="submit"
                className="btn btn-warning"
                value="CẬP NHẬT TỈNH THÀNH"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { updateProfile };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateDistrict);
