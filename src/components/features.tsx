import { useState } from 'react';
import { Squares2X2Icon } from '@heroicons/react/24/outline';
import { RectangleStackIcon } from '@heroicons/react/24/solid';
import { AppWindow } from 'lucide-react';
import video_thumbnail from '../assets/images/video.webp'
import video_company from '../assets/video_company.mp4'
function Features() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const playVideo = () => {
        setIsVideoOpen(true);
    }

    const closeVideo = () => {
        setIsVideoOpen(false);
    }

    return (
        <>
            <div id='feature' className="bg-[#121723] py-12 md:py-20 lg:py-30">
                <div className="flex justify-center px-5 lg:px-40 text-white pb-5">
                    <div>
                        <h1 className="text-[1.7rem] lg:text-[2.7rem] font-extrabold text-center pb-4">Main Features</h1>
                        <h6 className="text-center text-[#788293] text-[1rem] lg:text-[1.1rem] leading-[1.8rem] lg:leading-[2rem]">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</h6>
                    </div>
                </div>

                <div className="flex px-5 md:px-10 lg:px-20 py-10 lg:py-15 gap-10 lg:gap-15 flex-col lg:flex-row">
                    <div className="text-white group cursor-default transition-transform duration-300 hover:-translate-y-2">
                        <div>
                            <Squares2X2Icon className="rounded-sm bg-[#182038] w-17 p-1 h-13 text-[#4a6cf7] group-hover:bg-[#4a6cf7] group-hover:text-white transition-all ease-in duration-300" />
                        </div>
                        <div className="pt-7">
                            <h3 className='font-extrabold text-[1.5rem] pb-3'>Crafted for Startups</h3>
                            <h6 className='text-[#959cb1] leading-[28px]'>Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.</h6>
                        </div>
                    </div>
                    <div className="text-white group cursor-default transition-transform duration-300 hover:-translate-y-2">
                        <div>
                            <RectangleStackIcon className="rounded-sm bg-[#182038] w-17 p-1 h-13 text-[#4a6cf7] group-hover:bg-[#4a6cf7] group-hover:text-white transition-all ease-in duration-300" />
                        </div>
                        <div className="pt-7">
                            <h3 className='font-extrabold text-[1.5rem] pb-3'>High-quality Design</h3>
                            <h6 className='text-[#959cb1] leading-[28px]'>Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.</h6>
                        </div>
                    </div>
                    <div className="text-white group cursor-default transition-transform duration-300 hover:-translate-y-2">
                        <div>
                            <AppWindow className="rounded-sm bg-[#182038] w-17 p-1 h-13 text-[#4a6cf7] group-hover:bg-[#4a6cf7] group-hover:text-white transition-all ease-in duration-300" />
                        </div>
                        <div className="pt-7">
                            <h3 className='font-extrabold text-[1.5rem] pb-3'>Next.js 13 (Latest)</h3>
                            <h6 className='text-[#959cb1] leading-[28px]'>Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.</h6>
                        </div>
                    </div>
                </div>

                <div className="flex px-5 md:px-10 lg:px-20 py-6 lg:py-15 gap-10 lg:gap-15 flex-col lg:flex-row">
                    <div className="text-white group cursor-default transition-transform duration-300 hover:-translate-y-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 rounded-sm bg-[#182038] w-17 p-1 h-13 text-[#4a6cf7] group-hover:bg-[#4a6cf7] group-hover:text-white transition-all ease-in duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </div>
                        <div className="pt-7">
                            <h3 className='font-extrabold text-[1.5rem] pb-3'>Tailwind CSS</h3>
                            <h6 className='text-[#959cb1] leading-[28px]'>Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.</h6>
                        </div>
                    </div>
                    <div className="text-white group cursor-default transition-transform duration-300 hover:-translate-y-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 rounded-sm bg-[#182038] w-17 p-1 h-13 text-[#4a6cf7] group-hover:bg-[#4a6cf7] group-hover:text-white transition-all ease-in duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </div>
                        <div className="pt-7">
                            <h3 className='font-extrabold text-[1.5rem] pb-3'>Fully Customizable</h3>
                            <h6 className='text-[#959cb1] leading-[28px]'>Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.</h6>
                        </div>
                    </div>
                    <div className="text-white group cursor-default transition-transform duration-300 hover:-translate-y-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 rounded-sm bg-[#182038] w-17 p-1 h-13 text-[#4a6cf7] group-hover:bg-[#4a6cf7] group-hover:text-white transition-all ease-in duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                        </div>
                        <div className="pt-7">
                            <h3 className='font-extrabold text-[1.5rem] pb-3'>Free and Open-Source</h3>
                            <h6 className='text-[#959cb1] leading-[28px]'>Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#121723] relative flex justify-center items-center flex-col w-full overflow-hidden'>
                <div className='px-5 lg:px-40 text-center'>
                    <h1 className="text-[1.7rem] lg:text-[2.7rem] font-extrabold text-center pb-4 text-white">We are ready to help</h1>
                    <h6 className="text-center text-[#788293] leading-[1.8rem] lg:leading-[2rem] text-[1rem] lg:text-[1.1rem]">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</h6>
                </div>

                <div className='pt-12 lg:pt-20 px-5 md:px-10 lg:px-30 relative pb-10 lg:pb-30 w-full max-w-5xl mx-auto'>
                    <div className="relative">
                        <img src={video_thumbnail} className='w-full rounded z-40 relative' alt="Video thumbnail" />
                        <div className='absolute inset-0 flex items-center justify-center z-40'>
                            <button
                                onClick={playVideo}
                                aria-label="Play video"
                                className='rounded-full bg-[#ffffff8f] h-14 w-14 lg:h-18 lg:w-18 cursor-pointer hover:bg-white hover:scale-110 transition-all ease-in duration-300 z-40 flex items-center justify-center shadow-lg'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 text-[#4a6cf7] relative left-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='bg-[url(../assets/images/shape.svg)] z-10 absolute top-[-60px] bg-cover bg-center bg-no-repeat h-full w-full'></div>
            </div>

            {/* Video modal */}
            {isVideoOpen && (
                <div
                    className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
                    onClick={closeVideo}
                >
                    <div
                        className="relative w-full max-w-3xl aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeVideo}
                            aria-label="Close video"
                            className="absolute cursor-pointer -top-10 right-0 text-white hover:text-gray-300 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <video
                            src={video_company}
                            controls
                            autoPlay
                            className="w-full h-full rounded bg-black"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </>
    );
}
export default Features