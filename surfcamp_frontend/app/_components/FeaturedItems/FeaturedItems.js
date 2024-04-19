import FeaturedArticle from "./FeaturedArticle";

export default function FeaturedItems({ items, headline }) {
  return (
    <section className="featured-items">
      <h3 className="featured-items__Headline">
        {headline || "Our Featured Items"}
      </h3>
      <div className="featured-items__container">
        {items.map((item) => (
          <FeaturedArticle article={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
