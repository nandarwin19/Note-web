import { extractImageUrl } from "@/utils/strapi.utils";
import Image from "next/image";

export default function LandscapeImage({ imageData }) {
  const { imageCaption, image } = imageData;

  return (
    <div className="article-image">
      <Image
        src={extractImageUrl(image)}
        alt={imageCaption}
        width={500}
        height={500}
      />
      {imageCaption && (
        <p className="copy article-image__caption copy-small">{imageCaption}</p>
      )}
    </div>
  );
}
