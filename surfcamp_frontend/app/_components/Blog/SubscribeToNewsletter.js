"use client";

import { useEffect, useState } from "react";

export default function SubscribeToNewsletter() {
  const [email, setEmail] = useState("");
  const [hasSignedUp, setHasSignedUp] = useState(false);

  //   useEffect(() => {
  //     console.log(email);
  //   }, [email]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (email.length) {
      setHasSignedUp(true);
    }
  };

  return (
    <section className="newsletter">
      {hasSignedUp ? (
        <h4 className="newsletter__thanks">Thank you for signing up!</h4>
      ) : (
        <>
          <div className="newsletter__info">
            <h4>subscribe to our newsletter</h4>
            <p className="copy">
              Unlock exclusive offers, updates and more when you sign up for our
              newsletter.
            </p>
          </div>
          <form className="newsletter__form" onSubmit={onSubmit}>
            <input
              type="text"
              className="newsletter__email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="newsletter__subscribe btn btn--medium btn--turquoise"
            >
              subscribe
            </button>
          </form>
        </>
      )}
    </section>
  );
}
