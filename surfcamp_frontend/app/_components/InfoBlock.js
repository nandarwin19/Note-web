import { createInfoBlockButton } from "@/utils/strapi.utils";
import Image from "next/image";
import Markdown from "react-markdown";

export default function InfoBlock({ data }) {
  const { headline, showImageRight, text, imageSrc, button } = data;
  return (
    <div className={`info ${showImageRight ? "" : "info--reversed"}`}>
      <Image
        className="info__image"
        src={imageSrc || "/info-blocks/rectangle.png"}
        alt="image"
        width={500}
        height={500}
      />
      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>
        <Markdown className="copy">{text}</Markdown>
        {button}
      </div>
    </div>
  );
}
