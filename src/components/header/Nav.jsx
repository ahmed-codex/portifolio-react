import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";
import { GoBell } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { act, useState } from "react";
import "./nav.css";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Connect", href: "#connect" },
];
const icons = [
  { name: FiGithub, href: "https://github.com/ahmed-codex" },
  { name: FaLinkedinIn, href: "https://www.linkedin.com/in/ahmed-codex/" },
  { name: FaWhatsapp, href: "https://wa.me/201157153463" },
  { name: FaFacebookF, href: "https://www.facebook.com/ahmed.mohamed.codex" },
];

export default function Nav() {
  const [active, setActive] = useState(0);

  return (
    <Disclosure
      as="nav"
      className=" fixed z-20 bg-gray-900/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px w-full after:bg-white/10"
    >
      <div className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-slate-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <HiMiniBars3
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <HiMiniXMark
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>

          <div className="logo tracking-wide flex shrink-0 items-center text-2xl sm:text-2xl md:text-3xl ml-10 md:ml-0 text-white ">
            <h1>Portfolio</h1>
          </div>

          <div className="flex items-center justify-center sm:gap-15 md:gap-10 lg:gap-20 sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 md:block">
              <div className="flex md:space-x-3 lg:space-x-4">
                {navigation.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    onClick={() => setActive(index)}
                    className={`rounded-md px-3 py-2 sm:text-md md:text-lg text-gray-400 font-medium ${active === index ? "bg-gray-950/50  text-slate-200" : " hover:bg-white/5 hover:text-gray-200"} `}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center gap-1 md:gap-1.5 lg:gap-3 pr-2 sm:static sm:inset-auto  sm:ml-6 sm:pr-1">
              {icons.map((icon, index) => (
                <a
                  href={icon.href}
                  target="_blank"
                  className="relative transition-all duration-300 rounded-full p-2 text-slate-300 hover:text-white cursor-pointer hover:outline-3 hover:outline-offset-2 hover:outline-gray-400 focus:text-gray-100 focus:outline-3 focus:outline-offset-2 focus:outline-slate-500"
                  key={index}
                >
                  <span className="absolute -inset-1.5" />
                  <icon.name aria-hidden="true" className="md:size-6 size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 space-x-1 px-2 pt-2 pb-3">
          {navigation.map((item, index) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              onClick={() => setActive(index)}
              className={`rounded-md px-2 md:px-3 py-2 text-lg text-gray-400 font-medium ${active === index ? "bg-gray-950/50  text-slate-200" : " hover:bg-white/5 hover:text-gray-200"} `}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
