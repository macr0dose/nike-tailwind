import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-50 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block relative">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <ul className="absolute top-full right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
              {navLinks.map((item) => (
                <li key={item.label} className="border-b last:border-b-0">
                  <a
                    href={item.href}
                    className="block px-4 py-2 font-montserrat leading-normal text-lg text-slate-gray hover:bg-gray-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
