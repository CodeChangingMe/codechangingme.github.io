import { work, skill, learn, education, language } from "@/constants/about";
import Work from "@/components/work";
import Skill from "@/components/skill";
import Education from "@/components/education";
import Language from "@/components/language";

export default function About() {
  return (
    <div className="mx-auto sm:w-9/12 md:w-144">
      {work && work?.content?.length ? (
        <section classNameName="py-5">
          <h2 className="pb-6 text-3xl font-bold text-#525252">{work.title}</h2>
          <Work workExperience={work.content} />
        </section>
      ) : null}

      {skill && skill?.content?.length ? (
        <section className="py-10">
          <h2 className="mb-10 text-3xl font-bold text-#525252">
            {skill.title}
          </h2>
          <Skill skills={skill.content} />
        </section>
      ) : null}

      {learn && learn?.content?.length ? (
        <section className="py-10">
          <h2 className="mb-10 text-3xl font-bold text-#525252">
            {learn.title}
          </h2>
          <Skill skills={learn.content} />
        </section>
      ) : null}

      {education && education?.content?.length ? (
        <section className="py-8">
          <h2 className="pb-3 text-3xl font-bold text-#525252">
            {education?.title}
          </h2>
          <Education educations={education?.content || []} />
        </section>
      ) : null}

      {language && language?.content?.length ? (
        <section className="py-8">
          <h2 className="pb-3 text-3xl font-bold text-#525252">
            {language.title}
          </h2>
          <Language languages={language.content} />
        </section>
      ) : null}
    </div>
  );
}
