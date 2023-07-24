"use client";

import logo from "../../assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa";

const FOOTER_COLUMNS = [
  {
    title: "About Us",
    links: [
      {
        name: "Our Company",
        link: "/about",
      },
      {
        name: "Stories and News",
        link: "/stories",
      },
    ],
  },
  {
    title: "Careers",
    links: [
      {
        name: "Culture and Values",
        link: "/culture",
      },
      {
        name: "Open Roles",
        link: "/open-roles",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        name: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        name: "Terms & Conditions",
        link: "/terms-conditions",
      },
    ],
  },
];

const FOOTER_SOCIAL_MEDIA_LINKS = [
  {
    name: "Facebook",
    link: "https://facebook.com",
    icon: <FaFacebook />,
  },
  {
    name: "Discord",
    link: "https://discord.com",
    icon: <FaDiscord />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com",
    icon: <FaTwitter />,
  },
  {
    name: "Instagram",
    link: "https://instagram.com",
    icon: <FaInstagram />,
  },
];

const Footer2 = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        
        {/* ---------- Top Footer ---------- */}
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="https://flowbite.com/" className="flex items-center">
              <Image src={logo} width={80} className="mr-3" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Company Name
              </span>
            </Link>
          </div>
          
          {/* ---------- Footer Columns ---------- */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((item) => {
              return (
                <FooterColumn
                  key={`footer-${item.title}`}
                  title={item.title}
                  links={item.links}
                />
              );
            })}
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />

        {/* ---------- Bottom Footer ---------- */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-400">
            © 2023{" "}
            <Link href="/" className="hover:underline">
              Company Name
            </Link>
            . All Rights Reserved.
          </span>

          {/* ---------- Social Media Links ---------- */}
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0 ">
            {FOOTER_SOCIAL_MEDIA_LINKS.map((item) => {
              return (
                <SocialMediaLink
                  key={`footer-${item.name}`}
                  name={item.name}
                  link={item.link}
                  icon={item.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold uppercase text-white">
        {title}
      </h2>
      <ul className="flex flex-col text-gray-400 font-medium gap-2">
        {links.map((item) => {
          return (
            <li>
              <Link href={item.link} className="hover:underline">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const SocialMediaLink = ({ name, link, icon }) => {
  return (
    <a href={link} className="text-gray-500 hover:text-white">
      {icon}
      <span className="sr-only">{name} community</span>
    </a>
  );
};

export default Footer2;
