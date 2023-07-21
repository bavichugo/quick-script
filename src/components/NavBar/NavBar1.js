"use client";
import Link from "next/link";
import logo from "./logo.png";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation"

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

/**
 * This is a simple responsive navbar component, with a logo, items, and a hamburger menu.
 */
const Navbar1 = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image src={logo} width={80} className="mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Company name
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={`${isExpanded}`}
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isExpanded ? "" : "hidden"
          } w-full delay-1000 transition-transform ease-linear md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 borde rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            {navItems.map((item) => {
              return (
                <NavLink key={item.link} name={item.name} link={item.link} pathname={pathname}/>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ name, link, pathname }) => {
  return (
    <li>
      <Link
        href={link}
        className={`block py-2 pl-3 pr-4 hover:bg-white md:hover:bg-transparent hover:text-blue-600 rounded md:bg-transparent md:p-0 ${pathname === link ? "text-blue-600" : "text-white"}`}
      >
        {name}
      </Link>
    </li>
  );
};

export default Navbar1;
