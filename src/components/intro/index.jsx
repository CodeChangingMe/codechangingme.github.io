import { intro } from "@/constants";

export default function Intro() {
  return (
    <article className="flex flex-col mx-auto">
      <h1 className="text-2xl leading-loose">👋 Hi, here is</h1>
      <h3 className="mt-9 text-6xl font-semibold leading-snug">
        Lei Wu's Blog.
      </h3>
      <h3 className="mb-9 text-6xl font-semibold leading-snug text-gray-300">
        I build things for the web.
      </h3>
      <p className="text-xl leading-loose">
        I'm a Front-End Engineer from China.
      </p>
      <p className="text-xl leading-loose">
        Previously, I worked in Ant Group and ByteDance.
      </p>
      <p className="text-xl leading-loose">
        I have more than 6 years experience in building web, most of using
        React.js.
      </p>
      <p className="text-xl leading-loose">
        Currently I am focused on becoming a more professional full stack
        engineer.
      </p>
      <p className="text-xl leading-loose">
        And you can find me in the following ways:
      </p>
      <ul className="flex pt-2">
        {intro.contents.map((content) => (
          <li className="pr-4" key={content.key}>
            <a
              className="underline text-xl"
              href={content.link}
              target="_blank"
            >
              {content.name}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
