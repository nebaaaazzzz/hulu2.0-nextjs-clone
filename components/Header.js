import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { GoVerified } from "react-icons/go";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { BiCollection } from "react-icons/bi";
function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-3 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="Home" Icon={AiOutlineHome} />
        <HeaderItem title="Trending" Icon={HiOutlineLightningBolt} />
        <HeaderItem title="Verified" Icon={GoVerified} />
        <HeaderItem title="Collections" Icon={BiCollection} />
        <HeaderItem title="Search" Icon={AiOutlineSearch} />
        <HeaderItem title="Account" Icon={VscAccount} />
      </div>
      <Image
        alt="logo"
        className="object-contain "
        src={
          "https://i0.wp.com/www.travelsizetips.com/wp-content/uploads/2018/12/hulu-logo-transparent.png?fit=2400%2C806"
        }
        width={100}
        height={100}
      />
    </header>
  );
}

export default Header;
