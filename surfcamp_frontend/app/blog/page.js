import axios from "axios";
import HightlightArticle from "../_components/Blog/HightlightArticle";
import SubscribeToNewsletter from "../_components/Blog/SubscribeToNewsletter";
import FeaturedItems from "../_components/FeaturedItems/FeaturedItems";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";

export default async function Page() {
  const data = await fetchBlogArticles();

  // write different queries: first one to find the highlight blog article

  // find the articles that are not highlight articles but sorted by publishing date

  const hightlightArticleData = data.find(
    (article) => article.isHightlightArticle
  );

  const featuredArticlesData = data.filter(
    (article) => !article.isHightlightArticle
  );

  return (
    <main className="blog-page">
      <HightlightArticle data={hightlightArticleData} />
      <SubscribeToNewsletter />
      <FeaturedItems items={featuredArticlesData} />
    </main>
  );
}

export const revalidate = 300;
