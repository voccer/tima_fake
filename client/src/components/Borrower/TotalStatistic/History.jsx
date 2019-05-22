import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BorrowHistory from '../../../HOC/BorrowHistory';
import Statistic from './Statistic';
import { getOwnPosts, updateStatePost } from '../../../actions/post.action';
class History extends Component {
  static propTypes = {
    getOwnPosts: PropTypes.func.isRequired,
    updateStatePost: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      posts: {}
    };
  }

  componentDidMount() {
    this.props.getOwnPosts();
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
        <Statistic posts={posts} />
        <BorrowHistory
          posts={posts}
          updateStatePost={this.props.updateStatePost.bind(this)}
          title="Danh sách đơn vay bạn đã tạo"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = { getOwnPosts, updateStatePost };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
