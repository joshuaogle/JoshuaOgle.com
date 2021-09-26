import React from 'react';
import './style.sass';

import {Link} from 'react-router';
import {prettyDate} from '../../utils';
import articles from '../../data/articles';
import Summary from './Summary';


class BlogPosts extends React.Component {
  summarize(summaryArticles) {
    if (!summaryArticles.length) {
      summaryArticles = [summaryArticles];
    }

    return summaryArticles.map((article) => this.renderSummary(article));
  }

  renderSummary(article) {
    return (
      <Summary key={`article-${article.title}`} article={article} />
    );
  }

  render() {
    const latestArticle = articles.slice(0, 1)[0];
    const olderArticles = articles.slice(1);

    return (
      <section className="content">
        <Link to={`/articles/${latestArticle.path}`} target="_new" className="article article-summary article-summary__featured">
          <article>
            <header>
              <h3 className="article-title">{latestArticle.title}</h3>
              <div className="article-meta">
                {prettyDate(latestArticle.date)}
              </div>
              <p>
                {latestArticle.summary}
              </p>
            </header>
          </article>
        </Link>

        <div className="article-summary__list">
          {this.summarize(olderArticles)}
        </div>
      </section>
    );
  }
}

export default BlogPosts;