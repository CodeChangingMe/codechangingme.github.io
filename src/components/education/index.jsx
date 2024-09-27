export default function Education({ educations = [] }) {
  return (
    <>
      {educations.map((education, index) => {
        return (
          <ul className="mb-4" key={index}>
            <li className="mb-3 text-#525252 text-xl">
              {education?.name} - {education?.degree}
            </li>
            <li className="pl-5 arrow text-base text-#525252">
              {education?.date}
            </li>
            <li className="pl-5 arrow text-base text-#525252">
              {education?.profession}
            </li>
          </ul>
        );
      })}
    </>
  );
}
