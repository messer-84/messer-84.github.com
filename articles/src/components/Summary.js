import React from 'react';
import {FaComments, FaNewspaper} from 'react-icons/fa';


const Summary = (props) => {
  const {commentsCount, postsCount} = props;

  return (
    <div className="container summary-container">
      <div className="row">
        <div className="col-6">
          <div className="summary-block articles">
            <span>{postsCount}</span>
            Articles
            <span className="icon">
              <FaNewspaper color="darkblue" size="50"/>
            </span>
          </div>
        </div>
        <div className="col-6">
          <div className="summary-block comments">
            <span>{commentsCount}</span>
            Comments
            <span className="icon">
              <FaComments color="darkblue" size="50"/>
          </span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Summary;

