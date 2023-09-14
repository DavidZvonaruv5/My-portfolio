"use client";
import { useState, useEffect } from "react";

export default function Recommendation() {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#Recommendation") {
        setHighlight(true);
        setTimeout(() => setHighlight(false), 800);
      }
    };

    checkHash();

    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  const summery = (
    <div className="hover:text-lime-100">
      {" "}
      &#8220; David Zvonariov is highly endorsed by his software engineering
      professor at Broad College. Not only an exceptional student, but David
      also served as an exercise checker, impressing with his expertise and
      reliability. His proactive contributions have been valuable, making him a
      standout candidate for any technical role.&#8221;{" "}
      <span className="font-bold">- Dr. Elena Kleiman</span>
    </div>
  );
  return (
    <div className=" text-white bg-transperent ml-3">
      <h1
        id="Recommendation"
        className={`text-2xl underline ${highlight ? "gradient-text-2" : ""}`}
      >
        Recommendation
      </h1>
      <br />
      <div className="text-base leading-7">
        <section className="mb-2">
          <p></p>
          <span>{summery}</span>
        </section>
        <h2 className="text-xl hover:font-bold hover:underline hover:text-blue-300">
          <a
            href="/Recommendation.pdf"
            download="David-Zvonaruv-Recommendation"
          >
            &#10140; Download my recommendation
          </a>
        </h2>
      </div>
    </div>
  );
}
