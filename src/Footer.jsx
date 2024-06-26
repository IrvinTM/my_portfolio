import { Link as ScrollLink } from 'react-scroll'; 
export function Footer(){

    return(
          <div className='w-90'>
            <hr className="my-2 border-gray-300 sm:mx-auto dark:border-gray-600 lg:my-8 shadow-2xl" />
          <div className="px-8 rounded-xl  bg-green-50 dark:bg-slate-700 mobile-navigation flex flex-row">
            <div className="dark:bg-slate-700 dark:text-slate-400 text-slate-500 mb-2 bg-green-50 flex pb-2 gap-8 font-bold text-sm tracking-wider">
              
            <ScrollLink
                  to="home-section"  
                  smooth={true}
                  offset={-50}
                >
                  <span className="hover:text-green-500 cursor-pointer">Home</span>
                </ScrollLink>
            <ScrollLink
                  to="skills-section"  
                  smooth={true}
                  offset={-50}
                >
                  <span className="hover:text-green-500 cursor-pointer">Skills</span>
                </ScrollLink>
              <ScrollLink
                  to="aboutme-section"  
                  smooth={true}
                  offset={-50}
                >
                  <span className="hover:text-green-500 cursor-pointer">About Me</span>
                </ScrollLink>
              <ScrollLink
                  to="projects-section"  
                  smooth={true}
                  offset={-270}
                >
                  <span className="hover:text-green-500 cursor-pointer">Projects</span>
                </ScrollLink>
            </div>
          </div>
          </div>
    )
}