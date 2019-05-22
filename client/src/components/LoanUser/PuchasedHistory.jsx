import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoanHistory from '../../HOC/LoanHistory';
import {
  getPurchasedPosts,
  loanCancelPost,
  updateStatePost
} from '../../actions/post.action';
class PuchasedHistory extends Component {
  static propTypes = {
    getPurchasedPosts: PropTypes.func.isRequired,
    loanCancelPost: PropTypes.func.isRequired,
    updateStatePost: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      posts: {}
    };
  }

  componentDidMount() {
    this.props.getPurchasedPosts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.post && nextProps.post.posts) {
      this.setState({ posts: nextProps.post.posts });
    }
  }
  render() {
    const { posts } = this.state;
    return (
      <div className="container py-5">
        <LoanHistory
          posts={posts}
          history={this.props.history}
          loanCancelPost={this.props.loanCancelPost.bind(this)}
          updateStatePost={this.props.updateStatePost.bind(this)}
          title="DANH SÁCH ĐƠN VAY ĐƯỢC CHUYỂN ĐẾN BẠN"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = {
  getPurchasedPosts,
  loanCancelPost,
  updateStatePost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PuchasedHistory);
