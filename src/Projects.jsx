
export function Projects({ title, description, imageUrl }) {
  return (
    <div className="h-auto w-28 min-w-52 min-h-52 p-1 mb-2 dark:rounded-lg">
      <div className="flex justify-center rounded-t-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <a href="#!">
          <img
            className="rounded-t-lg w-32 h-32"
            src={imageUrl} // Use imageUrl prop here
            alt=""
          />
        </a>
      </div>
      <div
        className="flex flex-row justify-center rounded-b-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
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
            className=" rounded-full w-14 h-10 p-1 ">
            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
          </button>
          <button
            type="button"
            className="rounded-full  w-14 h-10 p-1 ">
            <svg width="32" height="32" viewBox="0 0 0.96 0.96" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.08" d="M0.4 0.16H0.24a0.08 0.08 0 0 0 -0.08 0.08v0.48a0.08 0.08 0 0 0 0.08 0.08h0.48a0.08 0.08 0 0 0 0.08 -0.08v-0.16m-0.32 -0.08 0.32 -0.32m0 0v0.2m0 -0.2h-0.2"/></svg>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
