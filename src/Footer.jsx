import { useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll'; 
export function Footer(){
    const projectsSectionRef = useRef(null);
    const aboutmeSectionRef = useRef(null);
    const skillsSectionRef = useRef(null);
    const homeRef = useRef(null);
  
    const handleScrollClick = () => {
      if (projectsSectionRef.current) {
        projectsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return(
          <div className="px-8 rounded-xl  bg-green-50 dark:bg-slate-700 mobile-navigation flex justify-center">
            <div className="dark:bg-slate-700 dark:text-white text-black mb-2 bg-green-50 flex flex-col gap-8 font-bold tracking-wider">
            <ScrollLink
                  to="home-section" // Replace with the ID of your Projects section
                  smooth={true}
                  offset={-50} // Optional offset to adjust scroll position (adjust as needed)
                  onClick={() => handleScrollClick(homeRef)}
                >
                  <span className=" cursor-pointer">Home</span>
                </ScrollLink>
            <ScrollLink
                  to="skills-section" // Replace with the ID of your Projects section
                  smooth={true}
                  offset={-50} // Optional offset to adjust scroll position (adjust as needed)
                  onClick={() => handleScrollClick(skillsSectionRef)}
                >
                  <span className=" cursor-pointer">Skills</span>
                </ScrollLink>
              <ScrollLink
                  to="aboutme-section" // Replace with the ID of your Projects section
                  smooth={true}
                  offset={-50} // Optional offset to adjust scroll position (adjust as needed)
                  onClick={() => handleScrollClick(aboutmeSectionRef)}
                >
                  <span className=" cursor-pointer">About Me</span>
                </ScrollLink>
              <ScrollLink
                  to="projects-section" // Replace with the ID of your Projects section
                  smooth={true}
                  offset={-50} // Optional offset to adjust scroll position (adjust as needed)
                  onClick={() => handleScrollClick(projectsSectionRef)}
                >
                  <span className=" cursor-pointer">Projects</span>
                </ScrollLink>
            </div>
          </div>
    )
}