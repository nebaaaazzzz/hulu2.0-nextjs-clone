import React, { useTransition } from "react";
import reqs from "../utils/req";
import NavItem from "./NavItem";
import { useRouter } from "next/router";
const links = reqs.map(({ title }) => title);
function Nav() {
  const router = useRouter();
  return (
    <nav className="relative ">
      <div className="flex px-10 sm:px-20 scrollbar-hide text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll ">
        {links.map((link, i) => {
          return (
            <h2
              key={i}
              onClick={() => {
                router.push(`?genre=${i}`);
              }}
              className="text-white last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
            >
              {link}
            </h2>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] to-white-400 h-10 w-1/12"></div>
    </nav>
  );
}

export default Nav;
