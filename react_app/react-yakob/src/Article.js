import React, {Component} from 'react';


export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      commentsIsOpen: false
    }
  }

  getBody() {
    const {article} = this.props;
    const {commentsIsOpen} = this.state;

    if (!this.state.isOpen) {
      return null;
    }
    return (
        <section>
          <div>
            {article.text}
          </div>
          <button onClick={this.toggleCommentsOpen}>{ commentsIsOpen ? 'Hide' : 'Show'} comments</button>
          {this.getComments()}
        </section>
    );
  }

  getComments() {
    const {article} = this.props;

    if (!this.state.commentsIsOpen) {
      return null;
    }
    const commentsList = article.comments ? article.comments.map(comment => {
          console.log(comment);

          return <li key={comment.id}>
            <div>{comment.text}</div>
            <strong>{comment.user}</strong>
          </li>
        }) : null;
    return (
        <section>
          <h3>Comments</h3>
          <ul>{commentsList}</ul>
        </section>
    );
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      commentsIsOpen: this.state.isOpen !== false
    })
  };
  toggleCommentsOpen = () => {
    this.setState({
      commentsIsOpen: !this.state.commentsIsOpen
    })
  };

  render() {
    const {article} = this.props;
    const {isOpen} = this.state;
    return (
        <div>
          <h3>{article.title}</h3>
          <button onClick={this.toggleOpen}>{isOpen ? 'close' : 'open'}</button>
          {this.getBody()}


          {/*<CommentsList comments={article.comments}/>*/}
        </div>
    );
  }

}

