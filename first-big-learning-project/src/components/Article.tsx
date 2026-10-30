interface Props {
    hedaer: string,
    content: string
}

const Article = ({hedaer = "Article header", content = "Article content"}: Props) => {
    return <article>
        <h3 className="acticle-header">{hedaer}</h3>
        <p className="article-content">{content}</p>
    </article>
}

export default Article;