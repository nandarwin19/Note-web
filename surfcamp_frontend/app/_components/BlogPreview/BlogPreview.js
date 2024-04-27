import { fetchBlogArticles } from "@/utils/strapi.utils";
import BlogPreviewItem from "./BlogPreviewItem";

export default async function BlogPreview() {
  const data = await fetchBlogArticles();
  const HightlightArticle = data.find((article) => article.isHightlightArticle);
  const recentlyPublishedArticles = data
    .filter((article) => !article.isHightlightArticle)
    .slice(0, 3);

  const articlesToDisplay = [HightlightArticle, ...recentlyPublishedArticles];
  console.log(articlesToDisplay);

  return (
    <div className="blog-preview">
      <h2 className="blog-preview__headline">the blog.</h2>
      <div className="blog-preview__container">
        {articlesToDisplay.map((article, idx) => (
          <BlogPreviewItem key={idx} article={article} />
        ))}
      </div>
    </div>
  );
}
