import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
export function Projects({ title, description, imageUrl, githubUrl, liveUrl}) {
  return (
    <div className="w-52 h-52 p-1 mb-2 dark:rounded-lg">
      <div className="border-t border-r border-l dark:border-green-900 flex justify-center rounded-t-lg bg-green-50 dark:bg-slate-700">
      <a href="#!">
          <img
            className=" w-32 h-32"
            src={imageUrl} // Use imageUrl prop here
            alt="noimage"
          />
        </a>
      </div>
      <div
        className=" h-40 border-b border-r border-l dark:border-green-900 rounded-b-lg shadow-sm bg-green-50 dark:bg-slate-700">
        <div className="h-20 text-sm text-center">
          <h5
            className=" text-center text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title}  
          </h5>
          <p className=" text-center text-neutral-600 dark:text-neutral-200">
            {description} 
          </p>
          <div className="flex justify-center flex-row items-center h-20">
          <a href={githubUrl}
          target="_blank">
          <button
            type="button"
            className="w-12 h-12 p-1 flex justify-center items-center hover:scale-125 transition-transform">
            <FaGithub className="w-8 h-8"></FaGithub>
          </button>
          </a>
          <a href={liveUrl}
          target="_blank">
          <button
            type="button"
            className="flex justify-center items-center w-12 h-12 p-1 hover:scale-125 transition-transform ">
              <MdOpenInNew className="w-8 h-8"></MdOpenInNew>
          </button>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
