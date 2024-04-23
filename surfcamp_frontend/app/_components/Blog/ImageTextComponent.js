import { extractImageUrl } from "@/utils/strapi.utils";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function ImageTextComponent({ component }) {
  const { paragraph, imageCaption, image, isLandscape, imageShowsRight } =
    component;

  //   console.log("http:127.0.0.1:1337" + component.image?.data?.attributes?.url);
  return (
    <div
      className={`article-text-image ${
        isLandscape ? "" : "article-text-image--portrait"
      } ${imageShowsRight ? "" : "article-text-image--reversed"}`}
    >
      <ReactMarkdown className="copy article-text-image__text article-paragraph">
        {paragraph}
      </ReactMarkdown>
      <div className="article-text-image__container">
        <div className="article-text-image__image">
          <Image src={extractImageUrl(image)} alt="" width={500} height={500} />
        </div>
        {imageCaption && (
          <p className="article-text-image__caption copy-small">
            {imageCaption}
          </p>
        )}
      </div>
    </div>
  );
}
