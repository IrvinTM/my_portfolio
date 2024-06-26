import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import { Link as ScrollLink } from 'react-scroll'; 
import profile  from "./assets/profile.png"
import resume from "./assets/resume.pdf"
export function Aboutme(){
    const projectsSectionRef = useRef(null);
    const handleScrollClick = () => {
        if (projectsSectionRef.current) {
          projectsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return(
        <article className="flex w-100 gradient-mask-top rounded-xl flex-col bg-green-50 text-slate-700 dark:border-slate-700 dark:bg-slate-700 dark:text-slate-300">
    {/* <!-- Images --> */}
    <div className="relative h-36"> 
        <div className="h-full w-full object-cover bg-gradient-to-r from-green-50  via-green-200 to-green-50 dark:from-slate-700 dark:via-green-900 dark:to-slate-700"  />
        <div className="relative z-10 mx-auto -mt-14 size-28 overflow-hidden rounded-full border-4 border-slate-100 dark:border-slate-800">
            <img src={profile} className="h-full object-cover transition duration-700 ease-out group-hover:scale-105" alt="avatar" />
        </div>
    </div>
    {/* <!-- Body --> */}
    <div className="flex flex-col gap-2 p-6 text-center mt-12">
        <h3 className="text-4xl font-bold text-center" aria-describedby="profileDescription">Irvin Torres</h3>
        <div className="flex justify-center gap-4">
        <button className="border w-26 h-8 border-slate-500 text-center hover:scale-110 transition-transform duration-75 rounded-xl bg-green-400 dark:bg-green-700 shadow-md text-black dark:text-slate-100">
        <a className="m-2" href={resume}>Download CV</a>
        </button>
        <button className="border w-26 h-8 border-slate-500 shadow-md hover:scale-110 transition-transform duration-75 text-center rounded-xl">
        <ScrollLink
                  to="projects-section" // Replace with the ID of your Projects section
                  smooth={true}
                  offset={-50} // Optional offset to adjust scroll position (adjust as needed)
                  onClick={() => handleScrollClick(projectsSectionRef)}
                >
                  <span className="m-4 ml-6 mr-6">Projects</span>                </ScrollLink>
        </button>
        
        </div>
        <p id="profileDescription" className="mt-4 text-xl max-w-xl">
        Full-stack developer with a passion for user experience, collaboration, and building meaningful digital products.I can pick up new skills very fast, and right now,
                I'm diving deep into React and Tailwind CSS.
        </p>
        {/* <!-- Social Links --> */}
        <div className="mt-4 flex items-center justify-center gap-6">

            {/* <!-- Email --> */}
            <a href="mailto:irvint698@gmail.com" className="text-slate-700 hover:scale-125 transition-transform dark:text-slate-300 dark:hover:text-green-" aria-label="email">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-7 shrink-0">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
            </a>

            {/* <!-- Github --> */}
            <a href="https://github.com/IrvinTM" target="_blank" className="text-slate-700 hover:scale-125 transition-transform dark:text-slate-300 dark:hover:text-green-" aria-label="instagram">
                <FaGithub className="w-6 h-6"></FaGithub>
            </a>

            {/* <!-- X (Twitter) --> */}
            <a href="https://x.com/Irvin0564312347?t=B_z-sZiBNvc0vjxzwobtvw&s=09" target="_blank" className="text-slate-700 hover:scale-125 transition-transform dark:text-slate-300 dark:hover:text-green-" aria-label="x or twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="size-5 shrink-0">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
            </a>

            {/* <!-- Linkedin --> */}
            <a href="https://www.linkedin.com/in/irvin-elias-torres-45869a272/" target="_blank" className="text-slate-700 hover:scale-125 transition-transform dark:text-slate-300 dark:hover:text-green-" aria-label="linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="size-6 shrink-0">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
            </a>
        </div>
    </div>
</article>
    )
}