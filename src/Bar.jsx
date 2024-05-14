import { useState, useEffect } from "react";
import {
    ComputerDesktopIcon,
    MoonIcon,
    SunIcon,
    Bars3Icon,
  } from "@heroicons/react/24/outline";
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
    <div className="app dark:bg-black dark:text-white text-black bg-white">
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-12">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <ComputerDesktopIcon className="h-6 w-6 text-primary" />
                  <span>Irvin Torres</span>
                </a>
              </div>
              {/* primary */}
              <div className="dark:bg-black dark:text-white hidden text-black bg-white lg:flex gap-8 ">
                <a href="#" className="">
                  Home
                </a>
                <a href="#">About me</a>
              <a href="#">Experience</a>
              <a href="#">Projects</a>
              {dark&&<button>
                <MoonIcon className="h-6" onClick={darkModeHandler} />
                </button>}
                {!dark&&<button>
                <SunIcon className="h-6" onClick={darkModeHandler} />
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
          className={`fixed z-40 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8 rounded-xl  bg-white dark:bg-black mobile-navigation">
            <div className="dark:bg-black dark:text-white text-black mb-2 bg-white flex flex-col gap-8 font-bold tracking-wider">
              <a href="#" onClick={() => setToggleMenu(!toggleMenu)}>About me</a>
              <a href="#" onClick={() => setToggleMenu(!toggleMenu)}>Experience</a>
              <a href="#" onClick={() => setToggleMenu(!toggleMenu)}>Projects</a>
              {dark&&<button>
                <MoonIcon className="h-6" onClick={darkModeHandler} />
                </button>}
                {!dark&&<button >
                <SunIcon className="h-6" onClick={darkModeHandler} />
                </button>}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}