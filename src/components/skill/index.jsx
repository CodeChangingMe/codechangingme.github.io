"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import Learn from "./learn";
import Score from "./score";

export default function Skill({ skills }) {
  const hasScore = skills.every((item) => item.score);
  const [content, setContent] = useState(
    skills.map((skill) => ({ ...skill, show: false }))
  );
  const techs = hasScore
    ? content
        .map((item) => ({ ...item, score: item.score || 0 }))
        .sort((a, b) => b.score - a.score)
    : content;

  const onMouseEvent = useCallback((target) => {
    setContent(
      content.map((item) =>
        target.name === item.name ? { ...item, show: !target.show } : item
      )
    );
  }, []);

  return (
    <ul className="grid grid-cols-4 gap-8">
      {techs.map((skill, index) =>
        skill.link ? (
          <li className="cursor-pointer" key={index}>
            <a href={skill.link} target="_href" rel="noreferrer">
              <Image src={skill.logo} alt={skill.name} width={50} height={50} />
            </a>
          </li>
        ) : (
          <li
            className="relative"
            onMouseEnter={() => onMouseEvent(skill)}
            onMouseLeave={() => onMouseEvent(skill)}
            key={index}
          >
            <Image src={skill.logo} alt={skill.name} width={50} height={50} />
            <Score score={skill.score} show={skill.show} />
            <Learn
              start={skill.start}
              progress={skill.progress}
              show={skill.show}
            />
          </li>
        )
      )}
    </ul>
  );
}
