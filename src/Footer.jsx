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
                  to="home-section"  
                  smooth={true}
                  offset={-50}
                  onClick={() => handleScrollClick(homeRef)}
                >
                  <span className="hover:text-green-500 cursor-pointer">Home</span>
                </ScrollLink>
            <ScrollLink
                  to="skills-section"  
                  smooth={true}
                  offset={-50}
                  onClick={() => handleScrollClick(skillsSectionRef)}
                >
                  <span className="hover:text-green-500 cursor-pointer">Skills</span>
                </ScrollLink>
              <ScrollLink
                  to="aboutme-section"  
                  smooth={true}
                  offset={-50}
                  onClick={() => handleScrollClick(aboutmeSectionRef)}
                >
                  <span className="hover:text-green-500 cursor-pointer">About Me</span>
                </ScrollLink>
              <ScrollLink
                  to="projects-section"  
                  smooth={true}
                  offset={-50}
                  onClick={() => handleScrollClick(projectsSectionRef)}
                >
                  <span className="hover:text-green-500 cursor-pointer">Projects</span>
                </ScrollLink>
            </div>
          </div>
    )
}