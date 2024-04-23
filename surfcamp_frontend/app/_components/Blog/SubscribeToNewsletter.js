"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function SubscribeToNewsletter() {
  const [email, setEmail] = useState("");
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [showError, setShowError] = useState(false);

  //   useEffect(() => {
  //     console.log(email);
  //   }, [email]);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (email.length) {
        setHasSignedUp(true);
        await axios.post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/newsletter-signups`,
          {
            data: {
              email,
            },
          }
        );
      }
      setHasSignedUp(true);
    } catch (err) {
      console.log(err);
      setShowError(true);
    }
  };

  return (
    <section className="newsletter">
      {showError ? (
        <h4 className="newsletter__th">Could not sign up</h4>
      ) : hasSignedUp ? (
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
