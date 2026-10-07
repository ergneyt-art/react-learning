import React from 'react';

class ArticleTemplate extends React.Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>This is an article.</p>
      </article>
    );
  }
}

export default ArticleTemplate;