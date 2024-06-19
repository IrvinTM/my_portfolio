import { useState, useEffect} from "react";
import {
    ComputerDesktopIcon,
    MoonIcon,
    SunIcon,
    Bars3Icon,
  } from "@heroicons/react/24/outline";
  import { Link as ScrollLink } from 'react-scroll'; 
export function Bar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [dark, setDark] = useState(false);
    const darkModeHandler = () => {
      setDark(!dark);
      document.documentElement.classList.toggle('dark')
  }
  const handleClickOutside = (event) => {
    if (
      !event.target.closest('.mobile-navigation') &&
      !event.target.closest('.menu-toggle') // Added check for menu-toggle
    ) {
      setToggleMenu(false);
    }
  }

  useEffect(() => {
    // Add event listener on component mount
    document.addEventListener('click', handleClickOutside);

    // Cleanup function to remove listener on component unmount
    return () => document.removeEventListener('click', handleClickOutside);
  }, [toggleMenu]);

  return (
      <nav>
        <div className="max-w-7xl mx-2 dark:bg-slate-700 dark:text-white text-black bg-green-50">
          <div className="flex mx-auto justify-between w-5/6 xl:w-fit 2xl:w-fit lg:w-fit ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-12">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-900 dark:text-slate-300 items-center "
                >
                  <ComputerDesktopIcon className="h-6 w-6 text-primary" />
                  <span className="whitespace-nowrap">IrvinTorres</span>
                </a>
              </div>
              {/* primary */}
              <div className=" text-primary font-bold dark:bg-slate-700 dark:text-white hidden text-black bg-green-50 lg:flex gap-8 ">
              <ScrollLink
                  to="home-section" // Replace with the ID of your Projects section
                  smooth={true}
                  offset={-50} // Optional offset to adjust scroll position (adjust as needed)

                >
                  <span onClick={() => setToggleMenu(!toggleMenu)} className="cursor-pointer hover:text-green-500">Home</span>
                </ScrollLink>
            <ScrollLink
                  to="skills-section" // Replace with the ID of your Projects section
                  smooth={true}
                  offset={-50} // Optional offset to adjust scroll position (adjust as needed)
        
                >
                  <span onClick={() => setToggleMenu(!toggleMenu)} className="cursor-pointer hover:text-green-500">Skills</span>
                </ScrollLink>
              <ScrollLink
                  to="aboutme-section" // Replace with the ID of your Projects section
                  smooth={true}
                  offset={-50} // Optional offset to adjust scroll position (adjust as needed)
                  
                >
                  <span onClick={() => setToggleMenu(!toggleMenu)} className="cursor-pointer hover:text-green-500">About Me</span>
                </ScrollLink>
              <ScrollLink
                  to="projects-section" // Replace with the ID of your Projects section
                  smooth={true}
                  offset={-270} // Optional offset to adjust scroll position (adjust as needed)
                  
                >
                  <span onClick={() => setToggleMenu(!toggleMenu)} className="cursor-pointer hover:text-green-500">Projects</span>
                </ScrollLink>
              {dark&&<button>
                <MoonIcon className="h-6 hover:text-green-500" onClick={darkModeHandler} />
                </button>}
                {!dark&&<button>
                <SunIcon className="h-6 hover:text-green-500" onClick={darkModeHandler} />
                </button>}
              </div>
            </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button className="menu-toggle" onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        {/* mobile navigation */}
        <div
          className={`relative z-40 w-36 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-200 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8 rounded-xl  bg-green-50 dark:bg-slate-700">
            <div className="dark:bg-slate-700  dark:text-white text-black mb-2 bg-green-50 flex flex-col gap-8 font-bold tracking-wider">
            <ScrollLink
                  to="home-section" // Replace with the ID of your Projects section
                  smooth={true}
                  offset={-50} // Optional offset to adjust scroll position (adjust as needed)
                  
                >
                  <span onClick={() => setToggleMenu(!toggleMenu)} className="hover:text-green-500 cursor-pointer">Home</span>
                </ScrollLink>
            <ScrollLink
                  to="skills-section" // Replace with the ID of your Projects section
                  smooth={true}
                  offset={-50} // Optional offset to adjust scroll position (adjust as needed)
    
                >
                  <span onClick={() => setToggleMenu(!toggleMenu)} className="hover:text-green-500 cursor-pointer">Skills</span>
                </ScrollLink>
              <ScrollLink
                  to="aboutme-section" // Replace with the ID of your Projects section
                  smooth={true}
                  offset={-50} // Optional offset to adjust scroll position (adjust as needed)
                >
                  <span onClick={() => setToggleMenu(!toggleMenu)} className="hover:text-green-500 cursor-pointer">About Me</span>
                </ScrollLink>
              <ScrollLink
                  to="projects-section" // Replace with the ID of your Projects section
                  smooth={true}
                  offset={-50} // Optional offset to adjust scroll position (adjust as needed)
                >
                  <span onClick={() => setToggleMenu(!toggleMenu)} className="hover:text-green-500 cursor-pointer">Projects</span>
                </ScrollLink>
              {dark&&<button>
                <MoonIcon className="h-6 hover:text-green-500" onClick={darkModeHandler} />
                </button>}
                {!dark&&<button >
                <SunIcon className="h-6 hover:text-green-500" onClick={darkModeHandler} />
                </button>}
            </div>
          </div>
        </div>
      </nav>
  )
}