import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableData from '../../HOC/TableData';
import Statistic from './Statistic';
import { getPostsOverview, purchasePost } from '../../actions/post.action';
import { getCurrentProfile } from '../../actions/profile.action';
import { countUser, countMoney } from '../../actions/statistic.action';
class Exchange extends Component {
  static propTypes = {
    getPostsOverview: PropTypes.func.isRequired,
    purchasePost: PropTypes.func.isRequired,
    countUser: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    countMoney: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      posts: {},
      statistic: {},
      profile: {}
    };
  }
  async componentDidMount() {
    this.props.getPostsOverview();
    this.props.countUser();
    this.props.countMoney();
    this.props.getCurrentProfile();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.post && nextProps.post.posts) {
      this.setState({ posts: nextProps.post.posts });
    }
    if (nextProps.statistic) {
      this.setState({ statistic: nextProps.statistic });
    }
    if (nextProps.profile) {
      this.setState({ profile: nextProps.profile.profile });
    }
  }
  render() {
    const { posts, statistic, profile } = this.state;
    return (
      <div className="container py-5">
        <Statistic statistic={statistic} />
        <TableData
          profile={profile}
          history={this.props.history}
          purchasePost={this.props.purchasePost.bind(this)}
          posts={posts}
          title="DANH SÁCH ĐƠN XIN VAY MỚI TRÊN TOÀN HỆ THỐNG"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post,
  statistic: state.statistic,
  profile: state.profile
});

const mapDispatchToProps = {
  getPostsOverview,
  purchasePost,
  countUser,
  countMoney,
  getCurrentProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Exchange);
