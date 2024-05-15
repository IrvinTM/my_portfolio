export const Skills = () => {
    
  return (
    <div name='skills' className='w-100 dark:bg-slate-700 dark:text-white text-black bg-green-50'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
          <div className=' w-full flex justify-center items-center flex-col'>
              <p className='text-4xl font-bold text-center '>Skills</p>
              <p className='text-lg text-center'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
          </div> 
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md hover:scale-110 duration-500 rounded-xl'>
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500 rounded-xl'>
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500 rounded-xl'>
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500 rounded-xl'>
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500 rounded-xl'>
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500 rounded-xl'>
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500 rounded-xl'>
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500 rounded-xl'>
                  <p className='my-4'>AWS</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500 rounded-xl'>
                  <p className='my-4'>Django</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500 rounded-xl'>
                  <p className='my-4'>Sass</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500 rounded-xl'>
                  <p className='my-4'>Mongodb</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500 rounded-xl'>
                  <p className='my-4'>GraphQl</p>
              </div>
          </div>
      </div>
    </div>
  );
};