import React, {Component} from "react";
import Table from './Table';
import Summary from './Summary';
import ModalWindow from './Modal';

import '../styles/App.css';

class App extends Component {
  state = {
    posts: [],
    postsCount: 0,
    commentsCount: 0,
    modalShow: false,
    activePost: 0
  };

  componentDidMount() {
    console.log('did mount');
    fetch('/api/data')
      .then(res => res.json())
      .then(posts => {
        const finalPosts = posts[0].posts;
        const postsCount = finalPosts.length;
        const commentsCount = this.commentsCount(finalPosts);

        this.setState({
          posts: finalPosts,
          postsCount,
          commentsCount
        })
      })
      .catch(error => console.error(error));
  }

  commentsCount(posts) {
    return posts
      .map(post => post.comments.length)
      .reduce((a, b) => a + b, 0);
  }

  handleModalClose = () => {
    this.setState({modalShow: false});
  }

  onModalShow = (id) => {
    this.setState({modalShow: true, activePost: id});
  }

  onDeleteComment = (postIndex, commentId) => {
    const {posts} = this.state;

    const updatedPosts = posts.map((post, index) => {
      if (index === postIndex) {
        const updatedComments = post.comments.filter((item,index) => {
          return index !== commentId;
        });
        return {
          ...post,
          comments: updatedComments
        }
      }
      return post;
    });
    const updatedCommentsCount = this.commentsCount(updatedPosts);

    this.setState({
      posts: updatedPosts,
      commentsCount: updatedCommentsCount
    });


  }
  onDeleteArticle = (id) => {
    const {posts, activePost} = this.state;
    const updatedPosts = posts.filter((item, index) => index !== id);
    const updatedCommentsCount = this.commentsCount(updatedPosts);
    const newActivePost = activePost > id ? activePost - 1 : 0;

    this.setState({
      posts: updatedPosts,
      postsCount: updatedPosts.length,
      commentsCount: updatedCommentsCount,
      activePost: newActivePost
    })
  };

  render() {
    const {posts, postsCount, commentsCount, modalShow} = this.state;

    return (
      <div className="main-container">
        <h1>Articles</h1>
        <Table
          posts={posts}
          onDeleteArticle={this.onDeleteArticle}
          onModalShow={this.onModalShow}
        />
        <Summary
          postsCount={postsCount}
          commentsCount={commentsCount}
        />
        <ModalWindow
          show={modalShow}
          onHide={this.handleModalClose}
          onDeleteComment={this.onDeleteComment}
          data={this.state}
        />
      </div>
    );
  }
}

export default App;
