function About() {
    return (
        <>
            <div id="home" className="bg-[#1e232e] text-white flex justify-center items-center px-5 sm:px-10 md:px-20 lg:px-80 py-16 md:py-24 lg:py-40">
                <div className="px-0 sm:px-5">
                    <h1 className="font-extrabold text-[1.5rem] sm:text-[1.9rem] leading-tight lg:text-[2.9rem] text-center pb-5">
                        Free and Open-Source Next.js Template for Startup & SaaS
                    </h1>
                    <h6 className="text-center text-[#788293] leading-[1.8rem] sm:leading-[2rem] text-[1rem] sm:text-[1.1rem]">
                        Startup is free Next.js template for startups and SaaS business websites comes with all the essential pages, components, and sections you need to launch a complete business website, built-with Next 13.x and Tailwind CSS.
                    </h6>
                    <div className="pt-12 lg:pt-20 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5">
                        <button className="flex bg-[#4a6cf7] h-14 sm:h-15 rounded text-white hover:bg-[#2b5cf6] transition-colors cursor-pointer font-semibold w-full sm:w-38 justify-center items-center gap-2">
                            🔥 Get Pro
                        </button>
                        <button className="flex bg-[#353943] h-14 sm:h-15 rounded text-white font-semibold cursor-pointer w-full sm:w-45 justify-center items-center hover:bg-[#3f434e] transition-colors">
                            Start on GitHub
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About