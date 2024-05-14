import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
export function Projects({ title, description, imageUrl }) {
  return (
    <div className="h-auto w-28 min-w-52 min-h-52 p-1 mb-2 dark:rounded-lg">
      <div className="flex justify-center rounded-t-lg dark:bg-neutral-900">
      <a href="#!">
          <img
            className=" w-32 h-32"
            src={imageUrl} // Use imageUrl prop here
            alt=""
          />
        </a>
      </div>
      <div
        className="flex flex-row justify-center rounded-b-lg bg-white dark:bg-neutral-900">
        <div className="p-6">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title}  
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {description} 
          </p>
          <div className="flex justify-center flex-row items-center">
          <button
            type="button"
            className="w-14 h-10 p-1 ">
            <FaGithub></FaGithub>
          </button>
          <button
            type="button"
            className="w-24 h-10 p-1 ">
              <MdOpenInNew></MdOpenInNew>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
