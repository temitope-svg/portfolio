import { useState } from "react";
import { TextAlignJustify } from "lucide-react";
import { X } from "lucide-react";   


const options = ["Home", "Portfolio", "About", "Services", "Contact Me"];
const spanClass = `relative text-md text-[#FE6F01] transition-all duration-300
  peer-checked:text-[#FE6F01]
  peer-checked:after:opacity-100 peer-checked:after:content-['']
  peer-checked:after:block peer-checked:after:w-1/2 peer-checked:after:h-0.5
  peer-checked:after:bg-[#FE6F01] peer-checked:after:rounded-md
  peer-checked:after:absolute peer-checked:after:right-0 peer-checked:after:-bottom-1
  peer-checked:before:opacity-100 peer-checked:before:content-['']
  peer-checked:before:block peer-checked:before:w-full peer-checked:before:h-0.5
  peer-checked:before:bg-[#FE6F01] peer-checked:before:rounded-md
  peer-checked:before:absolute peer-checked:before:right-0 peer-checked:before:bottom-0`;


const optToId = {
    "Home": "home",
    "Portfolio": "portfolio",
    "About": "about",
    "Services": "services",
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
            <div className="flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md px-4 py-3">
                <div className="flex items-center space-x-2">
                    <img src="Temi_logo.svg" alt="lebo" className="w-10 h-10" />
                    <h3 className="mt-1.5 text-xl font-semibold text-[#FE6F01]">Temi Forge</h3>
                </div>

                {/* Desktop nav */}
                <div className="hidden md:flex mt-3 mr-8 space-x-3 select-none rounded-lg p-2">
                    {options.map((opt) => (
                        <label key={opt} className="flex items-center justify-center grow cursor-pointer"
                            onClick={() => handleNav(opt)}
                        >
                            <input
                                className="hidden peer"
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

                <button className="md:hidden mr-4 text-[#FE6F01]" onClick={() => setIsOpen(true)}>
                    <TextAlignJustify size={26} />
                </button>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setIsOpen(false)} />
            )}

            {/* Side nav */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white/10 backdrop-blur-md z-50 shadow-lg transform transition-transform duration-300 md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex items-center justify-between p-4">
                    <span className="text-[#FE6F01] font-semibold">Temi Forge</span>
                    <button onClick={() => setIsOpen(false)} className="text-gray-400 text-xl leading-none border border-[#FE6F01] rounded-full p-1"><X className="text-[#FE6F01]" /></button>
                </div>
                <nav className="flex flex-col mt-2">
                    {options.map((opt) => (
                        <label key={opt} className="flex items-center cursor-pointer px-5 py-3 hover:bg-[#984201]"
                            onClick={() => handleNav(opt)}
                        >
                            <input
                                className="hidden peer"
                                type="radio"
                                name="mobile-radio"
                                value={opt}
                                checked={active === optToId[opt]}  // controlled by active prop
                                onChange={() => handleNav(opt)}
                            />
                            <span className="peer-checked:font-medium text-[#FE6F01] text-sm peer-checked:border-l-2 peer-checked:border-[#FE6F01] peer-checked:pl-2 transition-all duration-200">
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