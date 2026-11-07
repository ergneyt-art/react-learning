import { Fragment } from "react/jsx-runtime";

interface ArticleData {
    id: string;
    title: string;
    topics: ArticleText[];
}

interface ArticleText {
      title: string;
      content: {
        subTitle?: string;
        text: string;
      }[];    
}

interface Props {
    aricle: ArticleData
}



const Article = (props: Props) => {
    return (
        <div id={props.aricle.id} className="article-container">
            <h2 className="article-header">{props.aricle.title}</h2>
            {props.aricle.topics.map((topic, index) => (
                <article key={`${props.aricle.id}-topic-${index}`} id={`${props.aricle.id}-topic-${index}`}>
                    <h3>{topic.title}</h3>
                    {topic.content.map((content, contentIndex) => (
                        <Fragment key={`${props.aricle.id}-topic-${index}-content-${contentIndex}`}>
                            {content.subTitle && <h4>{content.subTitle}</h4>}
                            <p>{content.text}</p>
                        </Fragment>
                    ))}
                </article>
            ))}
        </div>
    )
}

export default Article;