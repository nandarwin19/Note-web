"use client";

import { useState } from "react";
import FeaturedArticle from "./FeaturedArticle";

export default function FeaturedItems({ items, headline }) {
  const [itemNumber, setItemNumber] = useState(3);

  const onShowMore = () => {
    if (itemNumber + 3 > items.length) {
      setItemNumber(items.length);
    } else {
      return setItemNumber(itemNumber + 3);
    }
  };

  return (
    <section className="featured-items">
      <h3 className="featured-items__Headline">
        {headline || "Our Featured Items"}
      </h3>
      <div className="featured-items__container">
        {items.slice(0, itemNumber).map((item) => (
          <FeaturedArticle article={item} key={item.id} />
        ))}
      </div>
      {itemNumber < items.length && (
        <button className="btn btn--medium btn--turquoise" onClick={onShowMore}>
          See more
        </button>
      )}
    </section>
  );
}
