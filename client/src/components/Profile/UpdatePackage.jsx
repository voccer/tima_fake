import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Package } from '../../utils/getPackage';
import { updateProfile } from '../../actions/profile.action';
import Notifications, { notify } from 'react-notify-toast';

class UpdatePackage extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    updateProfile: PropTypes.func.isRequired
  };
  toast = notify.createShowQueue();
  constructor(props) {
    super(props);

    this.state = {
      packages: []
    };
  }
  componentDidMount() {
    const { packages } = this.props.profile;
    this.setState({ packages });
    this.mySet = new Set(packages);
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
    this.setState({ packages: [...this.mySet] });
  }
  onSubmit(e) {
    e.preventDefault();
    const { packages } = this.state;

    this.props.updateProfile('loan/update/packages', { packages });
    const msg = 'Cập nhật gói sản phẩm thành công.';
    this.toast(msg, 'warning', 3000);
  }
  render() {
    const { packages } = this.state;
    return (
      <div className="tm-dtcv bg-white p-3 px-md-5 pb-md-5 pt-md-4">
        <Notifications options={{ zIndex: 200, top: '10px' }} />
        <form noValidate onSubmit={e => this.onSubmit(e)}>
          <h2 className="text-uppercase fs-16 fw-6 mb-0">
            Các gói sản phẩm bạn nhận đơn vay
          </h2>

          <hr className="mb-3" />
          <div className="form-group">
            <div className="row">
              {Package.map((val, key) => {
                return (
                  <label className="custom-control col-md-5" key={key}>
                    <input
                      value={val[0]}
                      name={val[0]}
                      type="checkbox"
                      className="custom-control-input"
                      onChange={e => this.onChange(e)}
                      checked={packages.indexOf(val[0]) !== -1}
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
              })}
            </div>
          </div>
          <div className="form-group">
            <div className="text-center">
              <input
                type="submit"
                className="btn btn-warning"
                value="CẬP NHẬT GÓI SẢN PHẨM MỚI"
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
)(UpdatePackage);
