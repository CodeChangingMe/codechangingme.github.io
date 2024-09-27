export default function Language({ languages }) {
  return (
    <ul>
      {languages.map((lang, index) => (
        <li
          className="arrow pl-5 text-base text-#525252 leading-relaxed"
          key={index}
        >
          <p>
            {lang.name} ({lang.degree})
          </p>
        </li>
      ))}
    </ul>
  );
}
