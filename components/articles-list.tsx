import ArticlePreview from './article-preview'
import Article from '../interfaces/article'

type Props = {
  allArticles: Article[]
}

const ArticlesList = ({ allArticles }: Props) => {
  return (
    <section>
      <h2>Articles</h2>
      <p>
        I love mentoring new designers
        and helping them learn the craft,
        especially if it involves getting designers to be more technical
        or our partners to get more creative.  
      </p>

      <nav>
        {allArticles.map((article) => (
          <ArticlePreview
            key={article.slug}
            title={article.title}
            meta={article.meta}
            slug={article.slug}
            excerpt={article.excerpt}
          />
        ))}
      </nav>
    </section>
  )
}

export default ArticlesList
