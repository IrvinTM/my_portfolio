import { Aboutme } from "./Aboutme.jsx"
import { Bar } from "./Bar"
import { Projects } from "./Projects.jsx"
import { useRef } from "react"
import { Skills } from "./Skills.jsx"
import { Footer } from "./Footer.jsx"

function App() {
  const projectsSectionRef = useRef(null);
  const aboutmeSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const homeRef = useRef(null);
  return (
    <div id="home-section" className=" overflow-x-hidden" ref={homeRef} >
    <div>
      <Bar projectsSectionRef={projectsSectionRef}
      aboutmeSectionRef = {aboutmeSectionRef}
      skillsSectionRef = {skillsSectionRef}
      homeRef = {homeRef}></Bar>
    </div>
    <div id="aboutme-section" ref={aboutmeSectionRef} className="flex justify-center items-center pb-80">
    <Aboutme
    projectsSectionRef={projectsSectionRef}></Aboutme>
    </div>
    <div className="flex justify-center items-center pb-80" id="skills-section" ref={skillsSectionRef}>
      <Skills></Skills>
    </div>
    <p className="text-4xl font-bold text-center pb-2">Projects</p>
    <div ref={projectsSectionRef} id="projects-section" className="flex justify-center items-center pb-20">
  <div className="flex sm:flex-row md:flex-row lg:flex-row flex-col justify-center items-center">
  <Projects
    title={"API nodejs"}
    description="Simple api with nodejs"
    imageUrl="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
    ></Projects>
    
    <Projects
    title={"API nodejs"}
    description="Simple api with nodejs"
    imageUrl="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
    ></Projects>
  </div>
  <div className="flex sm:flex-row md:flex-row lg:flex-row flex-col justify-center items-center">
  <Projects
    title={"API nodejs"}
    description="Simple api with nodejs"
    imageUrl="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
    ></Projects>
    
    <Projects
    title={"API nodejs"}
    description="Simple api with nodejs"
    imageUrl="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
    ></Projects>
  </div>
</div>
<div className="flex flex-row justify-center">
  <Footer></Footer>
</div>
</div>

  )
}

export default App
