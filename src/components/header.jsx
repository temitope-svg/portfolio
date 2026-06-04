import { useState } from "react";
import { TextAlignJustify, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const options = ["Home", "Portfolio", "About", "Services", "Contact Me"];

const spanClass = `relative text-md text-accent transition-all duration-300
  peer-checked:text-accent
  peer-checked:after:opacity-100 peer-checked:after:content-['']
  peer-checked:after:block peer-checked:after:w-1/2 peer-checked:after:h-0.5
  peer-checked:after:bg-accent peer-checked:after:rounded-md
  peer-checked:after:absolute peer-checked:after:right-0 peer-checked:after:-bottom-1
  peer-checked:before:opacity-100 peer-checked:before:content-['']
  peer-checked:before:block peer-checked:before:w-full peer-checked:before:h-0.5
  peer-checked:before:bg-accent peer-checked:before:rounded-md
  peer-checked:before:absolute peer-checked:before:right-0 peer-checked:before:bottom-0`;

const optToId = {
  Home: "home",
  Portfolio: "portfolio",
  About: "about",
  Services: "services",
  "Contact Me": "contact",
};

const Header = ({ active, onNav }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (opt) => {
    const id = optToId[opt];
    if (onNav[id]) onNav[id]();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-border bg-header px-4 py-3 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <img src="Temi_logo.svg" alt="lebo" className="h-10 w-10" />
          <h3 className="mt-1.5 text-xl font-semibold text-accent">Temi Forge</h3>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="mt-3 mr-2 flex select-none space-x-3 rounded-lg p-2">
            {options.map((opt) => (
              <label
                key={opt}
                className="flex grow cursor-pointer items-center justify-center"
                onClick={() => handleNav(opt)}
              >
                <input
                  className="peer hidden"
                  type="radio"
                  name="radio"
                  value={opt}
                  checked={active === optToId[opt]}
                  onChange={() => handleNav(opt)}
                />
                <span className={spanClass}>{opt}</span>
              </label>
            ))}
          </div>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button className="mr-2 text-accent" onClick={() => setIsOpen(true)} aria-label="Open menu">
            <TextAlignJustify size={26} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-overlay md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 transform border-l border-border bg-header shadow-lg backdrop-blur-md transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="font-semibold text-accent">Temi Forge</span>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full border border-accent p-1 leading-none"
            aria-label="Close menu"
          >
            <X className="text-accent" />
          </button>
        </div>
        <nav className="mt-2 flex flex-col">
          {options.map((opt) => (
            <label
              key={opt}
              className="flex cursor-pointer items-center px-5 py-3 hover:bg-accent/10 dark:hover:bg-accent/20"
              onClick={() => handleNav(opt)}
            >
              <input
                className="peer hidden"
                type="radio"
                name="mobile-radio"
                value={opt}
                checked={active === optToId[opt]}
                onChange={() => handleNav(opt)}
              />
              <span className="text-sm text-accent transition-all duration-200 peer-checked:border-l-2 peer-checked:border-accent peer-checked:pl-2 peer-checked:font-medium">
                {opt}
              </span>
            </label>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
