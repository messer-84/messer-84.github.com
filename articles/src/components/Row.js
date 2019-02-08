import React from 'react';
import Button from 'react-bootstrap/Button';
import {FaCommentAlt} from 'react-icons/fa';

const Row = (props) => {
  const handleDeleteArticle = id => () => {
    props.onDeleteArticle(id)

  };
  const handleModalShow = id => () => {
    props.onModalShow(id);
  };

  const {post, index} = props;
  const commentsCount = post.comments.length;

  return (
    <div className="row table-posts-row">
      <div className="col-3">{post.name}</div>
      <div className="col-7">{post.text}</div>
      <div className="col-1">{commentsCount}</div>
      <div className="col-1">
        <div className="btn-group" role="group" aria-label="Basic example">
          <Button
            variant="link"
            onClick={
              handleModalShow(index)
            }>
            <FaCommentAlt color="darkblue" size="23"/>
          </Button>
          <button
            type="button"
            className="btn close"
            onClick={handleDeleteArticle(index)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
  )
};

export default Row;
