import axios from "axios";
import Link from "next/link";

const BASE_URL = process.env.STRAPI__URL || "http://127.0.0.1:1337";

export async function fetchDataFromStrapi(route) {
  const url = `${BASE_URL}/api/${route}`;

  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(`Could not fetch data from ${url}`);
  }
}

export function processInfoBlocks(data) {
  const infoBlockRaw = data.data.data.attributes.info_blocks.data;
  return infoBlockRaw.map((infoBlock) => ({
    ...infoBlock.attributes,
    imageSrc: BASE_URL + infoBlock.attributes.image.data.attributes.url,
    id: infoBlock.id,
    button: createInfoBlockButton(infoBlock.attributes.button),
  }));
}

export function createInfoBlockButton(buttonData) {
  if (!buttonData) {
    return null;
  }
  return (
    <Link
      href={`/${buttonData.slug}`}
      className={`btn btn--medium btn--${buttonData.colour}`}
    >
      {buttonData.text}
    </Link>
  );
}

export async function fetchBlogArticles() {
  const blogData = await fetchDataFromStrapi("blog-articles?populate=deep");
  const data = blogData.data.data;

  const processedBlogArticles = data.map(processBlogArticle);
  processedBlogArticles.sort(
    (a, z) => new Date(z.publishedAt) - new Date(a.publishedAt)
  );
  return processedBlogArticles;
}

function processBlogArticle(article) {
  return {
    ...article.attributes,
    id: article.id,
    featuredImage:
      BASE_URL + article.attributes?.featuredImage?.data?.attributes?.url,
  };
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
}

export function extractImageUrl(image) {
  const url = BASE_URL + image?.data?.attributes?.url;
  return url;
}
