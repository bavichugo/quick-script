"use client";

import Link from "next/link";

const FOOTER_ITEMS = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    name: "Licensing",
    link: "/licensing",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Footer1 = () => {
  return (
    <footer className="bg-gray-800 mt-auto">
      <div className="w-full mx-auto container p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            xSeries
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
          {FOOTER_ITEMS.map((item) => <FooterLink {...item} />)}
        </ul>
      </div>
    </footer>
  );
};

const FooterLink = ({name, link}) => {
  return (
    <li>
      <Link href={link} className="mr-4 hover:underline md:mr-6 ">
        {name}
      </Link>
    </li>
  );
};

export default Footer1;
