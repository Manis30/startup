import { useState } from 'react';

function Price() {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        { name: 'Lite', monthly: 40, yearly: 384 },
        { name: 'Basic', monthly: 399, yearly: 3830 },
        { name: 'Plus', monthly: 589, yearly: 5654 },
    ];

    return (
        <>
            <div id='price' className="bg-[#121723] px-5 lg:px-20 pb-20">
                <div className="flex px-0 lg:px-80 pt-20 text-white pb-10">
                    <div>
                        <h1 className="text-[1.7rem] lg:text-[2.7rem] font-extrabold text-center pb-4">Simple and Affordable Pricing</h1>
                        <h6 className="text-center text-[#788293] text-[1.1rem] leading-[2rem]">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</h6>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-4 pb-14 text-white">
                    <span className={!isYearly ? 'font-semibold' : 'text-[#788293]'}>Monthly</span>
                    <button
                        onClick={() => setIsYearly(!isYearly)}
                        className="w-14 h-7 bg-[#4a494938] rounded-full relative cursor-pointer"
                    >
                        <span className={`absolute top-1 w-5 h-5 bg-[#4a6cf7] rounded-full transition-all duration-200 ${isYearly ? 'left-8' : 'left-1'}`}></span>
                    </button>
                    <span className={isYearly ? 'font-semibold' : 'text-[#788293]'}>Yearly</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 pb-10 text-white">
                    {plans.map((plan) => (
                        <div key={plan.name} className="p-8 bg-[#4a494938] rounded transition duration-200 ease-in hover:bg-[#7c808d30] hover:shadow-[0_0_12px_2px_rgba(255,255,255,0.2)]">
                            <div className="flex justify-between pb-5">
                                <h3 className="font-semibold text-[1.8rem]">
                                    ${isYearly ? plan.yearly : plan.monthly}
                                    <span className="text-[#788293] text-[1rem] font-semibold">/{isYearly ? 'yr' : 'mo'}</span>
                                </h3>
                                <p className="font-semibold text-[1.2rem]">{plan.name}</p>
                            </div>
                            <p className="text-[#788293] text-[1rem] pb-8">Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.</p>
                            <button
                                onClick={() => alert(`Starting free trial for ${plan.name} plan`)}
                                className="bg-[#4a6cf7] w-full p-3 cursor-pointer font-semibold capitalize rounded mb-6 hover:bg-[#1a6bc4] transition ease-in duration-100"
                            >
                                Start free trail
                            </button>
                            <hr className="text-[#52515196] pb-9" />
                            <div className="flex pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-[#4a6cf7]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <p className="pl-2 text-[#788293]">All UI Components</p>
                            </div>
                            <div className="flex pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-[#4a6cf7]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <p className="pl-2 text-[#788293]">Use with Unlimited Projects</p>
                            </div>
                            <div className="flex pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-[#4a6cf7]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <p className="pl-2 text-[#788293]">Commercial Use</p>
                            </div>
                            <div className="flex pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-[#4a6cf7]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <p className="pl-2 text-[#788293]">Email Support</p>
                            </div>
                            <div className="flex pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-[#4a6cf7]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <p className="pl-2 text-[#788293]">Lifetime Access</p>
                            </div>
                            <div className="flex pb-7">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-[#4a6cf7]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <p className="pl-2 text-[#788293]">Free Lifetime Updates</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Price