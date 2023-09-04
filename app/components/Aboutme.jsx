import Link from "next/link";

export default function Aboutme() {
  const text = `Hello! I'm David Zvonaruv, a Software Engineer. Let me tell you a bit about myself.

Passionate about embracing emerging technologies, I am driven by a relentless pursuit of learning. My commitment to self-improvement empowers me to explore new horizons and stay at the forefront of innovation. Whether it's diving into new languages, frameworks, or paradigms, I thrive on the excitement of expanding my skill set.

My journey is a testament to my dedication to continuous growth. Embracing the challenges of both solo exploration and collaborative teamwork, I've cultivated not only the ability to absorb information independently but also to seamlessly integrate into diverse teams. Faced with complex problems, I find satisfaction in devising elegant solutions that harness both creativity and analytical acumen.

Responsibility is at the core of my character. Whether it's taking charge of a project, contributing to a group effort, or embracing the weight of individual tasks, I approach every endeavor with unwavering diligence and conscientiousness.

My academic accomplishments reflect a commitment to excellence. Mastering concepts in Data Structures & Introduction to Algorithms, Elements of Computing Systems, and Operating Systems, I've honed my proficiency in foundational areas that underscore a strong technical foundation.

Recently, my journey has been enriched by an ever-growing fascination with fullstack development. This newfound interest has ignited a desire to grasp the intricate interplay between front-end elegance and back-end functionality, inspiring me to explore the art of creating cohesive digital experiences.

Yet, I don't rest on laurels. Driven by an intrinsic desire for improvement, I continually strive to surpass yesterday's accomplishments, setting higher benchmarks and embarking on a journey towards personal and professional transcendence.`;

  const words = text.split("\n\n");
  return (
    <div className="w-10/12 text-white bg-zinc-700 border-r-2 border-zinc-900 ml-4 mr-1  mb-5">
      <div id="Aboutme" className="text-s ">
        <h1 className="text-2xl underline mt-2">About me</h1>
        <br />
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

        <br />
        <h1 className="text-2xl underline">Education</h1>
        <br />

        <p id="Education" className="text-s mb-2">
          Velit ullamco minim cupidatat quis voluptate. Aliqua do magna ut culpa
          excepteur cillum enim et cupidatat. Commodo magna ea labore nisi anim
          aliqua nulla mollit laboris laboris adipisicing ipsum. Quis cupidatat
          officia labore mollit ullamco exercitation magna excepteur excepteur
          deserunt incididunt. Ipsum et sint minim ea magna Lorem nisi velit
          voluptate ut esse eiusmod pariatur. Eiusmod do tempor elit nostrud
          veniam aute consectetur. Dolor laborum tempor adipisicing consequat
          veniam aute ad qui excepteur elit. Esse velit reprehenderit laboris
          labore commodo. Cupidatat ullamco nulla ut non esse esse. Adipisicing
          officia in officia cupidatat ullamco consectetur proident eu
          reprehenderit velit excepteur elit. Magna culpa consectetur ut anim
          amet officia nostrud magna consectetur incididunt non mollit ex.
          Aliqua labore ex non qui excepteur deserunt cupidatat laborum Lorem
          non magna occaecat consequat. Id enim laborum quis pariatur cillum
          nostrud minim ex adipisicing ad pariatur ullamco. Proident esse
          deserunt nulla laborum magna proident aliqua veniam nulla elit esse
          cupidatat. Mollit cillum ut eiusmod consectetur ut ullamco dolore.
          Magna ea et mollit duis nisi laborum cillum esse consectetur
          incididunt. Amet eiusmod adipisicing sit labore laboris proident
          culpa. Incididunt labore consectetur anim cupidatat. Sint id non quis
          ullamco. Dolor excepteur culpa anim fugiat qui. Nulla in anim pariatur
          ipsum ad est exercitation irure aliquip et ut reprehenderit sint. Sunt
          in aliquip incididunt velit consectetur aliquip ad exercitation ipsum
          ut eiusmod nostrud laborum ex. Aliqua aute duis laboris Lorem commodo
          ad reprehenderit culpa exercitation aute sit. Ex ad nisi id magna
          consectetur consectetur deserunt proident officia proident. Amet amet
          aute laborum adipisicing officia non culpa cillum aliquip qui eu non
          aliqua. Amet occaecat ipsum do adipisicing irure pariatur aliqua
          nostrud ipsum sint laboris et. Ex reprehenderit occaecat et nostrud
          dolor minim do. Cupidatat officia dolor ipsum elit et amet aliquip.
          Fugiat laborum non nostrud dolore proident. Aliqua minim commodo dolor
          in culpa proident sit ullamco id non ad eiusmod. Nisi sunt eu velit
          sint sunt irure qui enim ex qui esse ullamco reprehenderit incididunt.
          Laborum dolore sunt culpa occaecat proident nulla. Nostrud eu aliqua
          dolor anim cupidatat irure. Pariatur anim anim duis fugiat fugiat
          ipsum proident. Voluptate occaecat ullamco enim et tempor eiusmod
          velit occaecat incididunt culpa qui. Nulla amet occaecat aliquip enim
          nostrud commodo dolore eiusmod ut elit ex eiusmod laboris. Dolore
          consequat laboris eiusmod mollit. Amet aute exercitation officia et
          elit esse nostrud velit exercitation commodo deserunt. Laborum minim
          occaecat occaecat excepteur labore nisi irure cupidatat. Eiusmod qui
          nulla duis cupidatat exercitation commodo labore cillum nulla. Ipsum
          tempor ex amet laborum occaecat cupidatat ad. Aliquip excepteur
          laborum elit quis ea. Anim amet irure ut reprehenderit incididunt
          pariatur esse consequat. Minim consequat fugiat ex mollit aliquip.
          Cillum pariatur id velit irure sint ut pariatur cillum adipisicing
          elit. Adipisicing ut deserunt esse qui. Mollit laboris sint veniam
          cupidatat magna dolore sit et eiusmod nulla. etur consectetur deserunt
          proident officia proident. Amet amet aute laborum adipisicing officia
          non culpa cillum aliquip qui eu non aliqua. Amet occaecat ipsum do
          adipisicing irure pariatur aliqua nostrud ipsum sint laboris et. Ex
          reprehenderit occaecat et nostrud dolor minim do. Cupidatat officia
          dolor ipsum elit et amet aliquip. Fugiat laborum non nostrud dolore
          proident. Aliqua minim commodo dolor in culpa proident sit ullamco id
          non ad eiusmod. Nisi sunt eu velit sint sunt irure qui enim ex qui
          esse ullamco reprehenderit incididunt. Laborum dolore sunt culpa
          occaecat proident nulla. Nostrud eu aliqua dolor anim cupidatat irure.
          Pariatur anim anim duis fugiat fugiat ipsum proident. Voluptate
          occaecat ullamco enim et tempor eiusmod velit occaecat incididunt
          culpa qui. Nulla amet occaecat aliquip enim nostrud commodo dolore
          eiusmod ut elit ex eiusmod laboris. Dolore consequat laboris eiusmod
          mollit. Amet aute exercitation officia et elit esse nostrud velit
          exercitation commodo deserunt. Laborum minim occaecat occaecat
          --------------------------------------
        </p>
      </div>
    </div>
  );
}
