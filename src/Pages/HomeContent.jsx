import React from 'react'
import { Link } from 'react-router-dom';
import democollectionbnr1 from "../assets/images/collection-banner/demo10-collection-bnr1.png";
import ring from "../assets/images/product-images/the_vow_ring.jpg"

function HomeContent() {
    return (
        <>

            {/* Banner Section */}
            <div className="mt-2 w-full">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="relative overflow-hidden group">

                        {/* Image */}
                        <img
                            src={democollectionbnr1}
                            alt=""
                            className="w-full max-w-[1160px] h-auto mx-auto"
                        />

                        {/* Text box — bottom overlay on desktop, below image on mobile */}
                        <div
                            className="
                                        bg-white text-left shadow-sm transition-all
                                        static mt-3
                                        lg:absolute lg:bottom-5 lg:left-5 lg:mt-0
                                        lg:pb-4 lg:pl-4
                                    "
                        >
                            <h3 className="text-[20px] font-semibold mb-1 text-black leading-snug">
                                The Creation Awaits.
                            </h3>

                            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                                Forged in purity. Defined by truth.<br />
                                A symbol of integrity — yours to behold.
                            </p>

                            <Link
                                to="/Creation"
                                className="
                                            inline-block px-4 py-2 
                                            bg-black text-white text-[13px] uppercase tracking-wide 
                                            border border-black 
                                            transition-all duration-300 
                                            hover:bg-transparent hover:text-black
                                        "
                            >
                                Reveal It
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <div className="py-3">
                <div className="max-w-[1200px] mx-auto ">
                    <div className="text-center ">
                        <h2
                            className="
                                        text-black leading-snug tracking-[0.2px]
                                        text-[16px]        /* mobile */
                                        sm:text-[18px]     /* small screens */
                                        md:text-[20px]     /* medium screens */
                                        lg:text-[22px]     /* large screens */
                                    "
                        >
                            The Creation. Inspired by Emotion.
                        </h2>
                    </div>
                </div>
            </div>

            <div className="py-1 w-full flex justify-center">
                <div className="w-full max-w-[1200px] px-4">

                    <div className="flex flex-wrap justify-start">

                        {/* Banner Item */}
                        <div className="w-full md:w-1/2 flex justify-start">
                            <div className="relative">

                                {/* Image */}
                                <div className="w-full sm:w-[90%] md:w-[575px]  h-auto md:h-[687px] overflow-hidden rounded">
                                    <img
                                        src={ring}
                                        alt="The Vow Ring"
                                        className="w-full h-full object-cover object-left"
                                    />
                                </div>

                                {/* Details */}
                                <div className="w-full text-center bg-white py-4 px-4 mt-4">
                                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-black tracking-[0.2px] mb-2">
                                        The Vow Ring
                                    </h3>
                                    <span className="block text-[12px] sm:text-[13px] text-gray-700 mb-2">
                                        Limited Edition 999 Only
                                    </span>
                                    <p className="text-gray-600 text-[13px] sm:text-[14px] leading-relaxed mb-4">
                                        A promise sealed in tungsten, bound by NFT.
                                    </p>
                                    <a
                                        href="/Edition"
                                        className="inline-block px-4 py-2 bg-black text-white uppercase text-[12px] tracking-wide border border-black transition-all duration-300 hover:bg-transparent hover:text-black"
                                    >
                                        Own this creation
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default HomeContent