import { Bar } from "./Bar"
import { Projects } from "./Projects.jsx"

function App() {

  return (
    <div>
    <div>
      <Bar></Bar>
    </div>
    <div className="flex flex-row justify-center items-center pb-10">
  <div className="flex sm:flex-row md:flex-row lg:flex-row flex-col justify-center items-center">
    <Projects
    title={"API nodejs"}
    description="Simple api with nodejs"
    imageUrl="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
    buttonLabel="WEBSITE"
    iconUrl="https://www.svgrepo.com/show/303615/github-icon-1-logo.svg"
    ></Projects>
    
    <Projects
    title={"API nodejs"}
    description="Simple api with nodejs"
    imageUrl="https://www.svgrepo.com/show/184143/java.svg"
    buttonLabel="WEBSITE"
    iconUrl="https://www.svgrepo.com/show/303615/github-icon-1-logo.svg"></Projects>
  </div>
  <div className="flex sm:flex-row md:flex-row lg:flex-row flex-col justify-center items-center">
  <Projects
    title={"API nodejs"}
    description="Simple api with nodejs"
    imageUrl="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
    buttonLabel="WEBSITE"
    iconUrl="https://www.svgrepo.com/show/303615/github-icon-1-logo.svg"
    ></Projects>
    
    <Projects
    title={"API nodejs"}
    description="Simple api with nodejs"
    imageUrl="https://www.svgrepo.com/show/184143/java.svg"
    buttonLabel="WEBSITE"
    iconUrl="https://www.svgrepo.com/show/303615/github-icon-1-logo.svg"></Projects>
  </div>
</div>
</div>

  )
}

export default App
