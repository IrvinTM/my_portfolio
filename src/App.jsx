import { Aboutme } from "./Aboutme.jsx"
import { Bar } from "./Bar"
import { Projects } from "./Projects.jsx"
import { useRef } from "react"
import { Skills } from "./Skills.jsx"
import { Footer } from "./Footer.jsx"
import Headroom from 'react-headroom';

function App() {
  const projectsSectionRef = useRef(null);
  const aboutmeSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const homeRef = useRef(null);
  return (
    <div id="home-section" className=" overflow-x-hidden" ref={homeRef} >
    <Headroom>
      <div className="lg:flex justify-center content-center xl:scale-125">
      <Bar projectsSectionRef={projectsSectionRef}
      aboutmeSectionRef = {aboutmeSectionRef}
      skillsSectionRef = {skillsSectionRef}
      homeRef = {homeRef}></Bar>
      </div>
    </Headroom>
    <div id="aboutme-section" ref={aboutmeSectionRef} className="flex justify-center items-center pb-80 xl:scale-110">
    <Aboutme className="scale-125"
    projectsSectionRef={projectsSectionRef}></Aboutme>
    </div>
    <div className="flex justify-center items-center lg:pt-20 pb-80 pt-12 xl:scale-110" id="skills-section" ref={skillsSectionRef}>
      <Skills></Skills>
    </div>
    <p className="text-4xl font-bold text-center pb-2 xl:scale-110 xl:pb-8">Projects</p>
    <div ref={projectsSectionRef} id="projects-section" className="flex justify-center items-center pb-80 xl:scale-110">
  <div className="flex sm:flex-row md:flex-row lg:flex-row flex-col justify-center items-center">
  <Projects
    title={"API nodejs"}
    description="Simple api with express js using the MVC pattern"
    imageUrl="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
    githubUrl={"https://github.com/IrvinTM/usefulwebsites"}
    liveUrl={"https://usefulwebsites-5rma.onrender.com/websites"}
    ></Projects>
    
    <Projects
    title={"Try GPT4 free"}
    description="Created with React and gpt4free library"
    imageUrl="https://webcartel.ai/images/news-07.svg"
    githubUrl={"https://github.com/IrvinTM/o_checker"}
    liveUrl={"https://trygpt4.onrender.com/"}
    ></Projects>
  </div>
  <div className="flex sm:flex-row md:flex-row lg:flex-row flex-col justify-center items-center">
  <Projects
    title={"GPT4 free backend"}
    description="Simple api with one endpoint using gpt4free."
    imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
    githubUrl={"https://github.com/IrvinTM/worker_api"}
    liveUrl={"https://worker-api-8932.onrender.com"}
    ></Projects>
    
    <Projects
    title={"Portfolio website"}  
    description="Portfolio website using React + Vite and Tailwindcss"
    imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    githubUrl={"https://github.com/IrvinTM/my_portfolio"}
    liveUrl={"#home-section"}
    ></Projects>
  </div>
</div>

<div className="flex flex-row justify-center xl:scale-110">
  <Footer></Footer>
</div>
</div>

  )
}

export default App
