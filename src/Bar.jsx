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
    <div className="app dark:bg-slate-700 dark:text-white text-black bg-green-50">
      <nav>
        <div className="max-w-7xl mx-auto">
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
                  <span className="whitespace-nowrap">Irvin Torres</span>
                </a>
              </div>
              {/* primary */}
              <div className="dark:bg-slate-700 dark:text-white hidden text-black bg-green-50 lg:flex gap-8 ">
                <a href="#" className="whitespace-nowrap">
                  Home
                </a>
                <a className="whitespace-nowrap" href="#">About me</a>
              <a className="whitespace-nowrap" href="#">Experience</a>
              <a className="whitespace-nowrap" href="#">Projects</a>
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
          <div className="px-8 rounded-xl  bg-green-50 dark:bg-slate-700 mobile-navigation">
            <div className="dark:bg-slate-700 dark:text-white text-black mb-2 bg-green-50 flex flex-col gap-8 font-bold tracking-wider">
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