import Link from "next/link";

export default function HightlightArticle({ data }) {
  const { headline, excerpt, slug, featuredImage } = data;
  // console.log(featuredImage);
  // console.log(data);

  return (
    <article className="hightlight-article">
      <div className="hightlight-article__info">
        <h3>{headline}</h3>
        <p className="copy">{excerpt}</p>
        <Link className="btn btn--turquoise btn--medium" href={`/blog/${slug}`}>
          Read More
        </Link>
      </div>
      <img className="hightlight-article__image" src={featuredImage} alt="" />
    </article>
  );
}
