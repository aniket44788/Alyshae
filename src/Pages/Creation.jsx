import React from 'react'

function Creation() {
  return (
    <>
      <div className="bg-gray-100 w-full">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="w-full max-w-[1170px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center text-sm text-gray-900 py-2">
              <a href="/" title="Back to the home page" className="text-gray-800 hover:text-orange-500 transition-colors duration-300 mr-1">
                Home
              </a>
              <span className="text-gray-900 mx-1">|</span>
              <span className="text-gray-900 mr-1">The Creation</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full max-w-[1200px] flex flex-col px-4 sm:px-6 lg:px-8 mx-auto">



          {/* Page Title */}
          <div className="page-title w-full text-left py-5">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat font-bold text-black uppercase">
              The Creation
            </h1>
          </div>

          {/* Category Banner */}
          <div className="category-banner w-full h-auto mb-5">
            <img
              src="https://www.alyshae.com/assets/images/collection-banner/collection-banner.jpg"
              alt="The Creation - Alyshaé Collection"
              className="w-full h-auto shadow-md object-cover "
              loading="lazy"
            />
          </div>

          {/* Category Description */}
          <div className="category-description mb-8 prose prose-lg max-w-none">
            <p className="text-sm sm:text-base text-gray-800 mb-4 last:mb-0">
              Every creation begins with a feeling — love, loss, or the unspoken truth that lives within us. At{' '}
              <strong className="font-semibold">Alyshaé</strong>, each piece is more than design; it is a fragment of emotion cast in tungsten, refined through fire, and sealed with gold.
            </p>
            <p className="text-sm sm:text-base text-gray-800 mb-4 last:mb-0">
              The Collection stands as a testament to purity and resilience — rings that whisper vows, pendants that carry secrets, and creations that outlast the moment they were made for. No imitation. No compromise. Only truth, sculpted into form.
            </p>
            <p className="text-sm sm:text-base text-gray-800 mb-4 last:mb-0">
              Discover what speaks to your soul. <em className="italic font-medium">Because emotion deserves something eternal.</em>
            </p>
          </div>

          {/* Product List */}
          <div className="product-list">
            <div className="grid-view-items space-y-6">
              {/* Product Item */}
              <div className="list-product list-view-item flex flex-row items-center border-b border-gray-200 pb-6  hover:opacity-80 transition-opacity duration-300">
                {/* Image Column */}
                <div className="list-view-item__image-column flex-shrink-0 w-16 sm:w-24 md:w-32 lg:w-56 pr-2 sm:pr-4">
                  <div className="list-view-item__image-wrapper relative ">
                    <a href="/TheEdition" className="block">
                      <img
                        src="https://www.alyshae.com/assets/images/the_vow_ring.jpg"
                        alt="The Vow Ring"
                        className="w-full h-auto aspect-[210/251] object-cover "
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>

                {/* Title Column */}
                <div className="list-view-item__title-column flex-grow p-1">
                  <h4 className="grid-view-item__title font-poppins font-semibold text-base sm:text-lg md:text-xl text-black mb-3 leading-tight">
                    <a href="/TheEdition" className="hover:text-orange-500 transition-colors duration-300">
                      The Vow Ring
                    </a>
                  </h4>
                  <p className="text-gray-600 text-[13px] mb-4 text-sm leading-relaxed">
                    A limited-edition Alyshaé creation — handcrafted, custom-engraved, and made uniquely for you. A symbol of purity, intention, and timeless elegance.
                  </p>
                  <a
                    href="/TheEdition"
                    className="btn btn-small inline-block font-poppins font-normal text-white text-xs uppercase tracking-wider bg-black border border-transparent rounded px-4 py-2 hover:bg-gray-800 opacity-80 hover:opacity-100 transition-all duration-300 text-center no-underline"
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

export default Creation