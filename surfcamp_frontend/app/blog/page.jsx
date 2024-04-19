import HightlightArticle from "../_components/Blog/HightlightArticle";
import SubscribeToNewsletter from "../_components/Blog/SubscribeToNewsletter";
import FeaturedItems from "../_components/FeaturedItems/FeaturedItems";

export default function Page() {
  const hightlightArticleData = {
    headline: "3 tips for a super fast takeoff",
    excerpt: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum soluta
        quos nostrum. Obcaecati distinctio officia adipisci molestiae quas quos
        quidem, est esse suscipit sit accusantium dolorem repellendus quo,
        nostrum cupiditate sed, magnam sapiente ea odio corrupti debitis! Sint
        possimus praesentium, libero consequatur ipsa beatae unde ullam cum
        dolores doloribus at!
      </>
    ),
    slug: "takeoff",
    featuredImage: "/assets/hero-experience.png",
  };

  const featuredArticles = [
    {
      headline: "surfing in the caribbean",
      slug: "/blog/whatever",
      date: "2021-01-01",
      featuredImage: "/assets/hero-experience.png",
    },
    {
      headline: "the best surf spots in the world",
      slug: "/blog/whatever",
      date: "2021-01-01",
      featuredImage: "/assets/hero-experience.png",
    },
    {
      headline: "how to get the perfect tan",
      slug: "/blog/whatever",
      date: "2021-01-01",
      featuredImage: "/assets/hero-experience.png",
    },
    {
      headline: "surfing in the caribbean",
      slug: "/blog/whatever",
      date: "2021-01-01",
      featuredImage: "/assets/hero-experience.png",
    },
    {
      headline: "the best surf spots in the world",
      slug: "/blog/whatever",
      date: "2021-01-01",
      featuredImage: "/assets/hero-experience.png",
    },
    {
      headline: "how to get the perfect tan",
      slug: "/blog/whatever",
      date: "2021-01-01",
      featuredImage: "/assets/hero-experience.png",
    },
  ];
  return (
    <main className="blog-page">
      <HightlightArticle data={hightlightArticleData} />
      <SubscribeToNewsletter />
      <FeaturedItems items={featuredArticles} />
    </main>
  );
}
