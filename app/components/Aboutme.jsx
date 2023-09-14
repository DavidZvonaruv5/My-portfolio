"use client";
import { useState } from "react";

export default function Aboutme() {
  const [Showmore, setShowmore] = useState("false");

  const text = `Hello! I'm David Zvonaruv, a Software Engineer. Let me tell you a bit about myself.

Passionate about embracing emerging technologies, I am driven by a relentless pursuit of learning. My commitment to self-improvement empowers me to explore new horizons and stay at the forefront of innovation. Whether it's diving into new languages, frameworks, or paradigms, I thrive on the excitement of expanding my skill set.

My journey is a testament to my dedication to continuous growth. Embracing the challenges of both solo exploration and collaborative teamwork, I've cultivated not only the ability to absorb information independently but also to seamlessly integrate into diverse teams. Faced with complex problems, I find satisfaction in devising elegant solutions that harness both creativity and analytical acumen.

Responsibility is at the core of my character. Whether it's taking charge of a project, contributing to a group effort, or embracing the weight of individual tasks, I approach every endeavor with unwavering diligence and conscientiousness.

My academic accomplishments reflect a commitment to excellence. Mastering concepts in Data Structures & Introduction to Algorithms, Elements of Computing Systems, and Operating Systems, I've honed my proficiency in foundational areas that underscore a strong technical foundation.

Recently, my journey has been enriched by an ever-growing fascination with fullstack development. This newfound interest has ignited a desire to grasp the intricate interplay between front-end elegance and back-end functionality, inspiring me to explore the art of creating cohesive digital experiences.

Yet, I don't rest on laurels. Driven by an intrinsic desire for improvement, I continually strive to surpass yesterday's accomplishments, setting higher benchmarks and embarking on a journey towards personal and professional transcendence.`;

  const words = text.split("\n\n");

  const moreContent = (
    <div>
      {" "}
      <p className="text-base leading-7 ">
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block transition hover:text-lime-100"
          >
            {word}
          </span>
        ))}
      </p>
      <p
        onClick={() => setShowmore(!Showmore)}
        className="hover:cursor-pointer text-sm text-neutral-200 hover:text-neutral-300 hover:glow"
      >
        show less...
      </p>
    </div>
  );

  const lessContent = (
    <div>
      {" "}
      <p className="text-base leading-7 "> {words[0]} </p>
      <p
        onClick={() => setShowmore(!Showmore)}
        className="hover:cursor-pointer text-sm text-neutral-200 hover:text-neutral-300 hover:glow"
      >
        show more...
      </p>
    </div>
  );

  return (
    <div className="text-white bg-zinc-700  ml-3 mr-[2%] ">
      <div id="Aboutme" className="text-s w ">
        <h1 className="text-2xl underline mt-2 underline-color-change">
          About me
        </h1>
        <br />
        {Showmore ? lessContent : moreContent}
      </div>
      <br />
    </div>
  );
}
