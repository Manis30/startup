import line from '../assets/images/lineicons-light.svg'
import plain from '../assets/images/plainadmin-light.svg'
import admin from '../assets/images/tailadmin-light.svg'
import grids from '../assets/images/tailgrids-light.svg'
import light from '../assets/images/uideck-light.svg'
import bold from '../assets/images/formbold-light.svg'
import about from '../assets/images/about-image-dark.svg'
import about2 from '../assets/images/about-image-2-dark.svg'

function Saas() {
  return (
    <>
      <div id='service' className="bg-[#121723] px-5 lg:px-20">
        <div className="p-5 sm:p-7 lg:p-20 bg-[#1e232e] mb-4 lg:mb-15">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 sm:gap-9">
            <div>
              <a className='opacity-60 hover:opacity-100 transition-all ease-in duration-200 cursor-pointer'><img src={bold} className='w-full' /></a>
            </div>
            <div>
              <a className='opacity-60 hover:opacity-100 transition-all ease-in duration-200 cursor-pointer'><img src={light} className='w-full' /></a>
            </div>
            <div className="grids">
              <a className='opacity-60 hover:opacity-100 transition-all ease-in duration-200 cursor-pointer'><img src={grids} className='w-full' /></a>
            </div>
            <div>
              <a className='opacity-60 hover:opacity-100 transition-all ease-in duration-200 cursor-pointer'><img src={line} className='w-full' /></a>
            </div>
            <div>
              <a className='opacity-60 hover:opacity-100 transition-all ease-in duration-200 cursor-pointer'><img src={admin} className='w-full' /></a>
            </div>
            <div>
              <a className='opacity-60 hover:opacity-100 transition-all ease-in duration-200 cursor-pointer'><img src={plain} className='w-full' /></a>
            </div>
          </div>
        </div>

        <div className="py-7 lg:py-20">
          <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto pb-15 lg:pb-30'>
            <div className="pt-10 pr-0 lg:pr-25 pb-10 lg:pb-0">
              <h1 className="text-[1.9rem] lg:text-[2.9rem] font-extrabold text-white pb-5">Crafted for Startup, SaaS and Business Sites.</h1>
              <h6 className="text-[#788293] text-[1.05rem] lg:text-[1.2rem] font-thin text-left leading-[1.8rem]">The main 'thrust' is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables.</h6>

              <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 gap-5">
                <div className='flex group items-center'>
                  <span className='border bg-[#182038] p-1 border-none text-[#4a6cf7] transition ease-in duration-200 rounded-[5px] group-hover:bg-[#4a6cf7] group-hover:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <h3 className='text-[#788293] ml-3 text-[1.2rem] font-semibold'>Premium quality</h3>
                </div>
                <div className='group flex items-center'>
                  <span className='border bg-[#182038] p-1 border-none text-[#4a6cf7] transition ease-in duration-200 rounded-[5px] group-hover:bg-[#4a6cf7] group-hover:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <h3 className='text-[#788293] ml-3 text-[1.2rem] font-semibold'>Next.js</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 pt-6 gap-5">
                <div className='flex group items-center'>
                  <span className='border bg-[#182038] p-1 border-none text-[#4a6cf7] transition ease-in duration-200 rounded-[5px] group-hover:bg-[#4a6cf7] group-hover:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <h3 className='text-[#788293] ml-3 text-[1.2rem] font-semibold'>Tailwind CSS</h3>
                </div>
                <div className='flex group items-center'>
                  <span className='border bg-[#182038] p-1 border-none text-[#4a6cf7] transition ease-in duration-200 rounded-[5px] group-hover:bg-[#4a6cf7] group-hover:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <h3 className='text-[#788293] ml-3 text-[1.2rem] font-semibold'>Rich documentation</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 pt-6 gap-5">
                <div className='group flex items-center'>
                  <span className='border bg-[#182038] p-1 border-none text-[#4a6cf7] transition ease-in duration-200 rounded-[5px] group-hover:bg-[#4a6cf7] group-hover:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <h3 className='text-[#788293] ml-3 text-[1.2rem] font-semibold'>Use for lifetime</h3>
                </div>
                <div className='group flex items-center'>
                  <span className='border bg-[#182038] p-1 border-none text-[#4a6cf7] transition ease-in duration-200 rounded-[5px] group-hover:bg-[#4a6cf7] group-hover:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <h3 className='text-[#788293] ml-3 text-[1.2rem] font-semibold'>Developer friendly</h3>
                </div>
              </div>
            </div>

            <div className="pl-0 lg:pl-40 pt-10 lg:pt-0">
              <img src={about} className='w-full' />
            </div>
          </div>
          <hr className='text-[#ffffff45]' />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-20 gap-10">
          <div className="w-full">
            <img src={about2} className='w-full' />
          </div>
          <div className="text-white pt-0 lg:pt-7">
            <div className="pb-7 lg:pb-5 pr-0 lg:pr-40">
              <h3 className='font-semibold text-[1.5rem] pb-4.5'>Bug free code</h3>
              <p className='text-[#788293] text-[1.1rem] lg:text-[1.2rem] font-medium text-left leading-[1.8rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="pb-7 lg:pb-5 pr-0 lg:pr-40">
              <h3 className='font-semibold text-[1.5rem] pb-4.5'>Premier support</h3>
              <p className='text-[#788293] text-[1.1rem] lg:text-[1.2rem] font-medium text-left leading-[1.8rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="pb-7 lg:pb-5 pr-0 lg:pr-40">
              <h3 className='font-semibold text-[1.5rem] pb-4.5'>Next.js</h3>
              <p className='text-[#788293] text-[1.1rem] lg:text-[1.2rem] font-medium text-left leading-[1.8rem]'>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt consectetur adipiscing elit setim.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Saas