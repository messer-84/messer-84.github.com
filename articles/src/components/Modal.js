import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import uniqid from 'uniqid';

class ModalWindow extends Component {
  handleDeleteComment = (postIndex, commentId)=> () => {
    this.props.onDeleteComment(postIndex, commentId);
  };
  render() {
    const {show, onHide, data} = this.props;
    const hasPosts = data.posts.length > 0;
    const post = data.posts[data.activePost];
    const postName = hasPosts ? post.name : '';
    const comments = hasPosts ? post.comments : '';

    return (
      <Modal show={show} onHide={onHide} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="m-title">
            Comments for article: <br/>
            "{postName}"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="table-comments">
            <div className="row comment-row">
              <div className="col-10">Comment</div>
              <div className="col-2">Remove</div>
            </div>
            {comments && comments.map((comment, index) => {
              return (
                <div className="row comment-row" key={uniqid()}>
                  <div className="col-10">{comment.text}</div>
                  <div className="col-2">
                    <button
                      type="button"
                      className="btn close"
                      onClick={this.handleDeleteComment(data.activePost, index)}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={onHide}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ModalWindow;
