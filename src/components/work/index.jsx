"use client";

import React, { useState } from "react";

export default function Work(props) {
  const { workExperience = [] } = props;
  const companyNames = (workExperience || [])?.map?.((exp) => exp.name);
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex min-h-60">
      <ul className="w-36">
        {companyNames.map((company, idx) => (
          <li
            key={company}
            className={`flex items-center pl-5 h-12 cursor-pointer border-l-2 ${
              current === idx
                ? "text-#F9CB81 font-bold border-#F9CB81"
                : "border-l-gray-200"
            } border-solid`}
            onClick={() => setCurrent(idx)}
          >
            {company}
          </li>
        ))}
      </ul>
      <ul className="w-136 ml-10">
        {workExperience?.map?.((exp, idx) => (
          <li
            key={exp.name}
            className={`${idx === current ? "block" : "hidden"}`}
          >
            <h3>
              <span className="font-bold text-xl">{exp.title}</span>&nbsp;
              {exp.link ? (
                <a
                  className="font-bold text-xl text-#F9CB81"
                  href={exp.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  @{exp.name}
                </a>
              ) : (
                <span className="font-bold text-xl">@{exp.name}</span>
              )}
            </h3>
            <p className="text-zinc-600 text-sm mb-4">{exp.date}</p>
            <ul>
              {exp.content.map((content, index) => (
                <li className="mb-3 pl-5 arrow" key={index}>
                  {content}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
