import React from 'react';
import Row from './Row';
import RowTh from './RowTh';
import uniqid from 'uniqid';


const Table = (props) => {
  const {posts, onDeleteArticle, onModalShow} = props;
  return (
    <div className="container">
      <div className="table-posts">
        <RowTh/>
        {posts.map((post, index) =>
          <Row
            onDeleteArticle={onDeleteArticle}
            key={uniqid()}
            post={post}
            index={index}
            onModalShow={onModalShow}
          />)
        }
      </div>
    </div>
  )
};

export default Table;
