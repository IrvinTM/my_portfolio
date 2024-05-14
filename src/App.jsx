import { Aboutme } from "./Aboutme.jsx"
import { Bar } from "./Bar"
import { Projects } from "./Projects.jsx"
import { useRef } from "react"
import { Tec } from "./Tec.jsx"

function App() {
  const projectsSectionRef = useRef(null);
  const aboutmeSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);
  const homeRef = useRef(null);
  return (
    <div id="home-section" ref={homeRef} >
    <div>
      <Bar projectsSectionRef={projectsSectionRef}
      aboutmeSectionRef = {aboutmeSectionRef}
      experienceSectionRef = {experienceSectionRef}
      homeRef = {homeRef}></Bar>
    </div>
    <div id="aboutme-section" ref={aboutmeSectionRef} className="flex justify-center items-center pb-80">
    <Aboutme></Aboutme>
    </div>
    <div id="experience-section" ref={experienceSectionRef}>
      <Tec></Tec>
    </div>
    <div ref={projectsSectionRef} id="projects-section" className="flex flex-row justify-center items-center pb-10">
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
</div>

  )
}

export default App
