import React, {Component} from 'react';
import toggleOpen from '../decorators/toggleOpen'


class CommentList extends Component {
  getBody = () => {
    const {comments, isOpen} = this.props;

    if (!isOpen) {
      return null
    }
    const commentsList = comments ? comments.map(comment => {
          return (
              <li key={comment.id}>
                <div>{comment.text}</div>
                <strong>{comment.user}</strong>
              </li>
          )
        }) : null;
    return (
        <div>
          <h3>Comments</h3>
          {commentsList}
        </div>
    );
  };

  render() {
    const {isOpen, toggleOpen} = this.props;
    const textBtn = isOpen ? 'Hide' : 'Show';
    return (
        <section>
          <button onClick={toggleOpen}>{textBtn} comments</button>
          <ul>{this.getBody()}</ul>
        </section>
    );


  }
}

export default toggleOpen(CommentList)