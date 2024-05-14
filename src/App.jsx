import { Aboutme } from "./Aboutme.jsx"
import { Bar } from "./Bar"
import { Projects } from "./Projects.jsx"

function App() {

  return (
    <div>
    <div>
      <Bar></Bar>
    </div>
    <div className="flex justify-center items-center pb-10">
    <Aboutme></Aboutme>
    </div>
    <div className="flex flex-row justify-center items-center pb-10">
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
