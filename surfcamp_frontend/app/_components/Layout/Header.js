"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
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
  ];

  return (
    <header
      className={`header ${path === "/experience" ? "header--light" : ""}`}
    >
      <p>N.</p>
      <ul className="header__nav">
        {navItems.map((item) => (
          <li key={item.display}>
            <Link href={item.slug}>
              <h5>{item.display}</h5>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/events">
        <button className="btn btn--black btn--small">BOOK NOW</button>
      </Link>
    </header>
  );
}
