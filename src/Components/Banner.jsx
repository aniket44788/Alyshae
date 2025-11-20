import React from 'react'
import democollectionbnr1 from "../assets/images/collection-banner/demo10-collection-bnr1.png";

function Banner() {
  return (
    <div className="mt-2 py-0 w-full">
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
                                    bg-white p-5 text-left shadow-sm transition-all
                                    static mt-3
                                    lg:absolute lg:bottom-5 lg:left-5 lg:mt-0
                                "
          >
            <h3 className="text-[20px] font-semibold mb-2 text-black leading-snug">
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

  )
}

export default Banner