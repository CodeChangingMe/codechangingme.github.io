"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { paths } from "@/constants";

export default function Header() {
  const pathname = usePathname();
  return (
    <nav className="flex py-10">
      <ul className="flex mx-auto">
        {paths.map((path) => (
          <li key={path.key}>
            <Link
              href={path.route}
              prefetch={true}
              className={`mx-6 sm:text-sm md:text-xl ${
                pathname === path.route
                  ? "text-#F9CB81 font-bold"
                  : "text-zinc-700"
              }`}
            >
              {path.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
