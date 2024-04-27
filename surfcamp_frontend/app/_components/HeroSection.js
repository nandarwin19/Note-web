import Image from "next/image";
import Link from "next/link";

export default function HeroSection({ imgSrc, headline, theme = "turquoise" }) {
  return (
    <section className="hero">
      <div className="hero__background">
        <Image
          src={imgSrc || "/assets/hero-home.png"}
          alt="hero"
          width={500}
          height={500}
        />
      </div>
      <div className={`hero__headline hero__headline--${theme}`}>
        {headline || <h1>Headline missing</h1>}
      </div>

      <Image
        className="hero__logo"
        src="/assets/logo.svg"
        width={100}
        height={100}
      />
    </section>
  );
}
