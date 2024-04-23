import { formatDate } from "@/utils/strapi.utils";
import Image from "next/image";

export default function ArticleIntro({ article }) {
  console.log(article);
  return (
    <div className="article-intro">
      <div className="article-intro__background">
        <Image src={article.featuredImage} alt="" width={500} height={500} />
      </div>
      <h3 className="article-intro__headline">{article.headline}</h3>
      <p className="copy-small bold">{formatDate(article.publishedAt)}</p>
      <p className="copy-small">{article.author}</p>
    </div>
  );
}
