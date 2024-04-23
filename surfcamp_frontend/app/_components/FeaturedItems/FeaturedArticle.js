import { formatDate } from "@/utils/strapi.utils";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedArticle({ article }) {
  return (
    <Link href={`/blog/${article.slug}`} className="featured-items__article">
      <div className="featured-items__article-img">
        <Image
          src={article.featuredImage}
          alt={article.title}
          width={500}
          height={500}
        />
      </div>
      <div className="featured-items__article-text">
        <h5>{article.headline}</h5>
        <p className="copy-small">{formatDate(article.publishedAt)}</p>
      </div>
    </Link>
  );
}
