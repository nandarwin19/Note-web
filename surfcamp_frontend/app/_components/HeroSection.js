import Link from "next/link";

export default function HeroSection({ imgSrc, headline, theme = "turquoise" }) {
  return (
    <section className="hero">
      <div className="hero__background">
        <img src={imgSrc || "/assets/hero-home.png"} alt="hero" />
      </div>
      <div className={`hero__headline hero__headline--${theme}`}>
        {headline || <h1>Headline missing</h1>}
      </div>
      <button className="btn btn--medium btn--turquoise">
        <Link href="/events">BOOK NOW</Link>
      </button>
      <img className="hero__logo" src="/assets/logo.svg" />
    </section>
  );
}
