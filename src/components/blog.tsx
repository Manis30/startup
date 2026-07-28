import blog1 from '../assets/images/blog-01.jpg'
import blog2 from '../assets/images/blog-02.jpg'
import blog3 from '../assets/images/blog-03.jpg'
import author1 from '../assets/images/author-01.png'

function Blog() {
    return (
        <>
            <div id='blog' className="bg-[#1e232e]">
                <div className="mx-5 lg:mx-20">
                    <div className="flex flex-col items-center text-white text-center px-5 lg:px-0 py-14 lg:py-20">
                        <div className="w-full max-w-2xl mx-auto pb-5">
                            <h1 className="text-[1.7rem] lg:text-[2.7rem] font-extrabold pb-4">Our Latest Blogs</h1>
                            <h6 className="text-[#788293] text-[1.1rem] leading-[2rem]">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</h6>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
                        <div className="flex group flex-col relative bg-[#4a494938] transition ease-in duration-200 hover:shadow-[0_0_12px_2px_rgba(255,255,255,0.2)] cursor-pointer">
                            <div className='w-full relative'>
                                <img src={blog1} className='w-full rounded' alt="Blog post" />
                                <button className='rounded-[18px] absolute top-4 right-4 px-3 py-1.5 font-semibold text-[0.9rem] bg-[#4a6cf7] text-white cursor-pointer hover:bg-[#3a5cd8] transition-colors'>Creative</button>
                            </div>
                            <div className="text-white w-full p-6 lg:p-8">
                                <h3 className='text-[1.3rem] lg:text-[1.5rem] font-bold pb-4 group-hover:text-[#4a6cf7] leading-[1.8rem] transition ease-in duration-200'>Best UI components for modern websites</h3>
                                <p className='text-[#788293] font-medium text-[1rem] pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.</p>
                                <hr className='text-[#52515196] my-4' />
                                <div className='flex justify-start items-center'>
                                    <div className='pr-5'>
                                        <img src={author1} className='w-10 h-10 rounded-full object-cover' alt="Author" />
                                    </div>
                                    <div className='pr-8'>
                                        <h6 className='text-[0.9rem] font-semibold'>By Samuyl Joshi</h6>
                                        <p className='text-[#788293] text-[0.7rem]'>Graphic Designer</p>
                                    </div>
                                    <div className='border-l border-[#52515196]'>
                                        <h6 className='pl-5 text-[0.8rem]'>Date</h6>
                                        <p className='pl-5 text-[#788293] text-[0.7rem]'>2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex group flex-col relative bg-[#4a494938] transition ease-in duration-200 hover:shadow-[0_0_12px_2px_rgba(255,255,255,0.2)] cursor-pointer">
                            <div className='w-full relative'>
                                <img src={blog2} className='w-full rounded' alt="Blog post" />
                                <button className='rounded-[18px] absolute top-4 right-4 px-3 py-1.5 font-semibold text-[0.9rem] bg-[#4a6cf7] text-white cursor-pointer hover:bg-[#3a5cd8] transition-colors'>Computer</button>
                            </div>
                            <div className="text-white w-full p-6 lg:p-8">
                                <h3 className='text-[1.3rem] lg:text-[1.5rem] font-bold pb-4 group-hover:text-[#4a6cf7] leading-[1.8rem] transition ease-in duration-200'>9 ways to improve your design skills</h3>
                                <p className='text-[#788293] font-medium text-[1rem] pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.</p>
                                <hr className='text-[#52515196] my-4' />
                                <div className='flex justify-start items-center'>
                                    <div className='pr-5'>
                                        <img src={author1} className='w-10 h-10 rounded-full object-cover' alt="Author" />
                                    </div>
                                    <div className='pr-8'>
                                        <h6 className='text-[0.9rem] font-semibold'>By Musharof Chy</h6>
                                        <p className='text-[#788293] text-[0.7rem]'>Content Writer</p>
                                    </div>
                                    <div className='border-l border-[#52515196]'>
                                        <h6 className='pl-5 text-[0.8rem]'>Date</h6>
                                        <p className='pl-5 text-[#788293] text-[0.7rem]'>2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex group flex-col relative bg-[#4a494938] transition ease-in duration-200 hover:shadow-[0_0_12px_2px_rgba(255,255,255,0.2)] cursor-pointer">
                            <div className='w-full relative'>
                                <img src={blog3} className='w-full rounded' alt="Blog post" />
                                <button className='rounded-[18px] absolute top-4 right-4 px-3 py-1.5 font-semibold text-[0.9rem] bg-[#4a6cf7] text-white cursor-pointer hover:bg-[#3a5cd8] transition-colors'>Design</button>
                            </div>
                            <div className="text-white w-full p-6 lg:p-8">
                                <h3 className='text-[1.3rem] lg:text-[1.5rem] font-bold pb-4 group-hover:text-[#4a6cf7] leading-[1.8rem] transition ease-in duration-200'>Tips to quickly improve your coding speed.</h3>
                                <p className='text-[#788293] font-medium text-[1rem] pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.</p>
                                <hr className='text-[#52515196] my-4' />
                                <div className='flex justify-start items-center'>
                                    <div className='pr-5'>
                                        <img src={author1} className='w-10 h-10 rounded-full object-cover' alt="Author" />
                                    </div>
                                    <div className='pr-8'>
                                        <h6 className='text-[0.9rem] font-semibold'>By Lethium Deo</h6>
                                        <p className='text-[#788293] text-[0.7rem]'>Graphic Designer</p>
                                    </div>
                                    <div className='border-l border-[#52515196]'>
                                        <h6 className='pl-5 text-[0.8rem]'>Date</h6>
                                        <p className='pl-5 text-[#788293] text-[0.7rem]'>2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Blog