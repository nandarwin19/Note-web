import { formatDate } from "@/utils/strapi.utils";
import Image from "next/image";
import Link from "next/link";

export default function BlogPreviewItem({ article }) {
  return (
    <Link href={`/blog/${article.slug}`} className="blog-preview__item">
      <div className="blog-preview__image">
        <Image
          src={article.featuredImage}
          alt={article.title}
          width={500}
          height={500}
        />
      </div>
      <h5 className="blog-preview__headline">{article.headline}</h5>
      <p className="copy-small">{formatDate(article.publishedAt)}</p>
    </Link>
  );
}
