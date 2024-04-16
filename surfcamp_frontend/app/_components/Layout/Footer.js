import Link from "next/link";

export const Footer = () => {
  const navItems = [
    {
      display: "camp",
      slug: "/",
    },
    {
      display: "experience",
      slug: "/experience",
    },
    {
      display: "blog",
      slug: "/blog",
    },
    {
      display: "events",
      slug: "/events",
    },
  ];

  const policies = [
    {
      display: "Imprint",
    },
    { display: "Privacy Policy" },
    { display: "Terms of Use" },
  ];

  return (
    <footer className="footer">
      <nav className="footer__nav">
        <p>N.</p>
        <ul className="footer__links">
          {navItems.map((item) => (
            <li key={item.slug}>
              <Link href={item.slug}>
                <h5>{item.display}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__policies">
        <ul className="footer__policies-nav">
          {policies.map((policy) => (
            <li key={policy.display}>
              <p className="copy">{policy.display}</p>
            </li>
          ))}
        </ul>
        <p className="copy">© 2024 N. All rights reserved.</p>
      </div>
    </footer>
  );
};
