import React from 'react'

function Footer() {
  return (
    <footer className="bg-white mt-10">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Top Section */}
        <div className="bg-white border-t border-gray-200 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {/* About Us */}
            <div>
              <img
                src="http://localhost:3006/assets/images/footer-logo.png"
                alt="Alyshae"
                className="mb-4 w-[140px]"
              />
              <p className="text-sm text-gray-700">Near Ibrahimpur Railway Station</p>
              <p className="text-sm text-gray-700">Vijayapura- 586109</p>
              <p className="text-sm text-gray-700">Karnataka - IN</p>

              <p className="mt-3 text-sm text-gray-900 font-medium">
                Phone: <span className="font-normal">(0) 94808 90906</span>
              </p>

              <p className="text-sm text-gray-900 font-medium">
                Email:
                <a href="mailto:info@alyshaé.com" className="ml-1 hover:text-red-500">
                  info@alyshaé.com
                </a>
              </p>
            </div>

            {/* Empty Column (same as original layout) */}
            <div></div>

            {/* Information Links */}
            <div>
              <h4 className="text-[15px] font-semibold uppercase mb-3">
                Informations
              </h4>
              <ul className="space-y-2">
                {[
                  ["About us", "/About_Us"],
                  ["Contact us", "/Contact_Us"],
                  ["Privacy policy", "/Privacy_Policy"],
                  ["Terms & condition", "/Terms_Condition"],
                  ["Return & refund", "/Return_Refund"],
                ].map(([text, link]) => (
                  <li key={text}>
                    <a
                      href={link}
                      className="text-gray-800 hover:text-red-500 text-sm transition"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="text-[15px] font-semibold uppercase mb-3">
                Stay Connected
              </h4>

              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center gap-2 text-sm hover:text-red-500">
                    <i className="icon icon-facebook"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-sm hover:text-red-500">
                    <i className="icon icon-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-sm hover:text-red-500">
                    <i className="icon icon-pinterest"></i> Pinterest
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-sm hover:text-red-500">
                    <i className="icon icon-instagram"></i> Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-sm hover:text-red-500">
                    <i className="icon icon-youtube"></i> Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 py-4 text-center">
          <p className="text-sm text-gray-700">
            © 2025 Alyshaé. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>

  )
}

export default Footer