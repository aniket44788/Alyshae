import React from 'react'
import ring from "../assets/images/product-images/the_vow_ring.jpg"
import "../Pages/edition.css"
function Edition() {
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
                            <span className="text-gray-900 mx-1">|</span>
                            <span className="text-gray-900 mr-1">The Edition</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="vow-product-section">
                <div class="vow-container">
                    <div class="vow-grid">

                        <div class="vow-image-col">
                            <div class="vow-image-wrapper">
                                <img src={ring} alt="The Vow Ring" class="vow-product-img" />
                            </div>
                        </div>

                        <div class="vow-details-col">
                            <div class="vow-meta">
                                <h1 class="vow-title">The Vow Ring</h1>
                                <span class="vow-limited">Limited Edition 999 Only</span>
                                <div class="vow-price">20,500.00</div>
                            </div>

                            <div class="vow-description">
                                <strong>The Vow Ring</strong> is crafted for the love that chooses, stays, and grows. A tribute to loyalty and life-partner energy, it carries the purity of a promise meant to last. When you own this creation, you carry a vow close — a quiet commitment, etched in metal, held for life.<br />
                                <br />

                                <strong>After your purchase:</strong><br /> Our concierge team will personally reach out to confirm your ring size and the custom message you wish to have engraved. Every engraving is crafted with care to ensure your ring is uniquely yours.<br />
                                <br />
                                <strong>Exclusive Purchase Rule:</strong><br /> Each customer may purchase <u>only one</u> Vow Ring per order to maintain its rarity and ensure the limited edition integrity.<br />
                                This is more than an accessory — it is a vow you carry with you. A reminder of who you are, what you stand for, and what you promise yourself. Embrace the purity. Embrace the vow.
                            </div>

                            <div class="vow-form">
                                <div class="vow-quantity-group">
                                    <label class="vow-label">Quantity: <span class="vow-required">*</span></label>
                                    <input type="text" value="1" class="vow-qty-input" readonly />
                                </div>

                                <a href="/Check_Out" class="vow-checkout-btn">Check Out</a>

                                <button type="button" class="vow-info-link">
                                    Document Delivery & Returns
                                </button>
                            </div>

                            <div class="vow-type">
                                Type: <a href="#" class="vow-type-link">Ring</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="py-5 w-full flex justify-center">
                <div className="w-full max-w-[1200px] px-8">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 flex justify-start">
                            <div className="relative">
                                <div className="w-full sm:w-[80%] md:w-[570px] h-auto md:h-[687px] overflow-hidden rounded transition-all duration-300">
                                    <img
                                        src={ring}
                                        alt="The Vow Ring"
                                        className="w-full h-full object-cover object-left"
                                    />
                                </div>

                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-8 md:px-6 mt-2 md:mt-0">
                            <div className="product-single__meta ">
                                <h1 className="product-single__title text-[26px]  font-montserrat font-bold text-black mb-2 uppercase">
                                    The Vow Ring
                                </h1>
                                <div className="prInfoRow inline-block mr-4 mb-2">
                                    <div className="product-stock">
                                        <span className="instock text-green-600 text-sm font-medium">Limited Edition 999 Only</span>

                                    </div>
                                </div>
                                <p className="product-single__price mb-4">
                                    <span className="product-price__price text-lg md:text-xl font-semibold text-black">
                                        <span className="money">20,500.00</span>
                                    </span>
                                </p>
                            </div>

                            <div className="product-single__description rte prose prose-sm md:prose-base max-w-none text-[13px]  text-gray-700 leading-relaxed">
                                <strong>The Vow Ring</strong> is crafted for the love that chooses, stays, and grows. A tribute to loyalty and life-partner energy, it carries the purity of a promise meant to last. When you own this creation, you carry a vow close — a quiet commitment, etched in metal, held for life. <br /><br />
                                <strong>After your purchase:</strong><br /> Our concierge team will personally reach out to confirm your ring size and the custom message you wish to have engraved. Every engraving is crafted with care to ensure your ring is uniquely yours. <br /><br />
                                <strong>Exclusive Purchase Rule:</strong><br /> Each customer may purchase <u>only one</u> Vow Ring per order to maintain its rarity and ensure the limited edition integrity. <br /><br /> This is more than an accessory — it is a vow you carry with you. A reminder of who you are, what you stand for, and what you promise yourself. Embrace the purity. Embrace the vow.
                            </div>

                            <form className="product-form product-form-product-template border-t border-b border-dotted border-gray-400 pt-5 pb-5 mt-1 mb-2 flex-row items-center gap-4 justify-between">
                                <div className="product-form__item--quantity flex items-start flex-col gap-2">
                                    <label className="label text-[13px] font-medium mr-2 whitespace-nowrap">
                                        Quantity:<span className="required text-red-500">*</span>
                                    </label>
                                    <div className="qtyField inline-block pl-5">
                                        <input
                                            type="text"
                                            name="quantity"
                                            value="1"
                                            className="product-form__input qty w-8 py-6 h-10 mb-3 text-center border border-gray-200 rounded-none bg-white text-sm font-poppins"
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="product-action flex-shrink-0 pl-5">
                                    <div className="product-form__item--submit w-[540px] sm:w-auto">
                                        <a href="/Check_Out" className="btn product-form__cart-submit inline-block w-[545px] h-[43px] font-poppins font-normal text-white text-xs uppercase tracking-wider bg-black border border-transparent rounded-none px-6 py-3 hover:bg-gray-800 opacity-80 hover:opacity-100 transition-all duration-300 text-center no-underline flex items-center justify-center">
                                            <span>Check Out</span>
                                        </a>
                                    </div>
                                </div>
                                <button className='mt-4 ' >
                                    <i className=" text-base">📄</i> 

                                    Delivery & Returns
                                </button>

                            </form>

                            <div className="type-product text-sm text-gray-700">
                                <span>Type:</span> <a href="#" className="text-black hover:text-red-500 transition-colors duration-300 ml-1">Ring</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  */}





        </>
    )
}

export default Edition