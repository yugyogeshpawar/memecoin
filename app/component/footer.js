import React from 'react'

function Footer() {
  return (
    <div>
      <footer id="site-footer" className="footer ">
          <canvas id="can" />
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
                <div className="widget w-info">
                  <a href="index.html" className="site-logo">
                    <img
                      style={{ maxWidth: 50 }}
                      src="img/logo-primary.png"
                      alt="Spot BETF"
                    />
                    <span className="logo-text">Spot Bitcoin ETF</span>
                  </a>
                  <p>
                    As the Bitcoin ETF saga hits a possible homestretch, we're
                    thrilled to introduce Blackrock Bitcoin ETF (SBETF) - the
                    world's first Meme-utility. With the SEC poised to make
                    historic decisions, SBETF is designed to capture the essence
                    of the crypto world's excitement and combine it with
                    real-world utility.
                  </p>
                </div>
                <div className="widget w-contacts">
                  <ul className="socials socials--white">
                    <li className="social-item">
                      <a target="_blank" href="https://t.me/SpotBitcoinETFClub">
                        <i className="fab fa-twitter betf-icon" />
                      </a>
                    </li>
                    <li className="social-item">
                      <a target="_blank" href="https://t.me/SpotBitcoinETFClub">
                        <svg
                          className="svg-inline--fa fa-twitter fa-w-16 betf-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width={22}
                          zoomAndPan="magnify"
                          viewBox="0 0 150 149.999998"
                          height={22}
                          preserveAspectRatio="xMidYMid meet"
                          version={1.0}
                        >
                          <defs>
                            <clipPath id="c550abc0a0">
                              <path
                                d="M 3.363281 3.363281 L 146.613281 3.363281 L 146.613281 146.613281 L 3.363281 146.613281 Z M 3.363281 3.363281 "
                                clipRule="nonzero"
                              />
                            </clipPath>
                          </defs>
                          <g clipPath="url(#c550abc0a0)">
                            <path
                              fill="#ffffff"
                              d="M 75 3.363281 C 35.425781 3.363281 3.363281 35.425781 3.363281 75 C 3.363281 114.570312 35.425781 146.636719 75 146.636719 C 114.570312 146.636719 146.636719 114.570312 146.636719 75 C 146.574219 35.425781 114.507812 3.363281 75 3.363281 Z M 113.578125 47.335938 L 99.621094 112.769531 C 98.9375 116.058594 95.09375 117.484375 92.425781 115.5 L 59.304688 90.8125 L 95.898438 57.753906 C 95.898438 57.753906 98.382812 55.710938 97.699219 55.089844 C 96.953125 54.34375 94.226562 55.957031 92.859375 56.886719 C 91.433594 57.941406 48.019531 85.355469 48.019531 85.355469 L 26 78.535156 C 23.519531 77.789062 23.519531 74.378906 27.117188 72.890625 L 107.996094 41.753906 C 111.53125 40.015625 114.320312 43.988281 113.578125 47.335938 Z M 113.578125 47.335938 "
                              fillOpacity={1}
                              fillRule="nonzero"
                            />
                          </g>
                        </svg>
                      </a>
                    </li>
                    <li className="social-item">
                      <a href="mailto:info@bitcoin-etf.club" target="_blank">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width={24}
                          zoomAndPan="magnify"
                          viewBox="0 0 30 30.000001"
                          height={24}
                          style={{ marginTop: 6 }}
                          preserveAspectRatio="xMidYMid meet"
                          version={1.0}
                        >
                          <defs>
                            <clipPath id="1bc2471ead">
                              <path
                                d="M 0.484375 0 L 29.515625 0 L 29.515625 29.03125 L 0.484375 29.03125 Z M 0.484375 0 "
                                clipRule="nonzero"
                              />
                            </clipPath>
                          </defs>
                          <g clipPath="url(#1bc2471ead)">
                            <path
                              fill="#ffffff"
                              d="M 15 0 C 6.984375 0 0.484375 6.5 0.484375 14.515625 C 0.484375 22.53125 6.984375 29.03125 15 29.03125 C 23.015625 29.03125 29.515625 22.53125 29.515625 14.515625 C 29.515625 6.5 23.015625 0 15 0 Z M 6.152344 7.574219 L 23.828125 7.574219 C 23.871094 7.574219 23.902344 7.59375 23.917969 7.632812 C 23.9375 7.675781 23.929688 7.710938 23.898438 7.742188 L 17.953125 13.378906 L 17.945312 13.390625 L 16.171875 15.074219 C 16 15.238281 15.804688 15.363281 15.585938 15.449219 C 15.363281 15.539062 15.136719 15.582031 14.898438 15.578125 C 14.664062 15.578125 14.4375 15.53125 14.21875 15.441406 C 14 15.351562 13.804688 15.226562 13.636719 15.0625 L 11.992188 13.46875 C 11.988281 13.464844 11.988281 13.460938 11.984375 13.460938 L 6.085938 7.742188 C 6.050781 7.710938 6.046875 7.675781 6.0625 7.632812 C 6.078125 7.59375 6.109375 7.574219 6.152344 7.574219 Z M 5.320312 20.484375 L 5.320312 8.351562 C 5.320312 8.308594 5.339844 8.28125 5.378906 8.261719 C 5.417969 8.246094 5.453125 8.253906 5.484375 8.28125 L 11.089844 13.71875 C 11.136719 13.761719 11.136719 13.804688 11.097656 13.851562 L 5.492188 20.546875 C 5.460938 20.582031 5.425781 20.59375 5.382812 20.578125 C 5.339844 20.5625 5.320312 20.53125 5.320312 20.484375 Z M 24.011719 21.460938 L 5.988281 21.460938 C 5.949219 21.460938 5.917969 21.441406 5.902344 21.402344 C 5.882812 21.367188 5.886719 21.332031 5.914062 21.300781 L 11.671875 14.425781 C 11.714844 14.371094 11.761719 14.371094 11.8125 14.417969 L 13.074219 15.640625 C 13.578125 16.132812 14.1875 16.382812 14.894531 16.382812 L 14.910156 16.382812 C 15.609375 16.386719 16.214844 16.144531 16.726562 15.660156 L 18.117188 14.335938 C 18.167969 14.289062 18.214844 14.289062 18.261719 14.34375 L 24.085938 21.300781 C 24.113281 21.332031 24.117188 21.367188 24.097656 21.402344 C 24.082031 21.441406 24.050781 21.460938 24.011719 21.460938 Z M 24.679688 20.484375 C 24.679688 20.53125 24.660156 20.558594 24.617188 20.574219 C 24.574219 20.589844 24.539062 20.582031 24.507812 20.546875 L 18.839844 13.777344 C 18.800781 13.730469 18.804688 13.6875 18.847656 13.644531 L 24.515625 8.265625 C 24.546875 8.234375 24.582031 8.230469 24.621094 8.246094 C 24.660156 8.261719 24.679688 8.292969 24.679688 8.335938 Z M 24.679688 20.484375 "
                              fillOpacity={1}
                              fillRule="nonzero"
                            />
                          </g>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container ">
            <div className="row">
              <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
                <div className="widget w-info">
                  <a href="index.html" className="site-logo">
                    <img
                      style={{ maxWidth: 50 }}
                      src="img/logo-primary.png"
                      alt="Spot BETF"
                    />
                    <span className="logo-text">Legal Disclaimer</span>
                  </a>
                  <p>
                    <b>
                      PLEASE READ THIS SECTION VERY CAREFULLY. IF YOU ARE IN
                      DOUBT ABOUT ANY ACTION YOU SHOULD TAKE, PLEASE CONSULT
                      YOUR LEGAL, FINANCIAL, TAX, OR OTHER SUITABLE PROFESSIONAL
                      ADVISORS.
                    </b>
                    <br />
                    SBETF tokens are not intended to constitute securities in
                    any jurisdiction or manner. This Whitepaper is not intended
                    and does not constitute a prospectus or offering document,
                    an offer to sell, or the solicitation of an offer to buy an
                    investment, security, commodity, or a swap on either a
                    security or commodity. <br /> <br />
                    SBETF tokens(TOC) of such an agreement should be taken care
                    of. The former shall prevail in the vent of any
                    inconsistencies between the TOC and this Whitepaper. No
                    regulatory authority has examined or approved of any of the
                    information set out in this Whitepaper, the former shall
                    prevail. No regulatory authority has examined or approved
                    any of the information set out in this Whitepaper, the
                    former shall prevail. No regulatory authority has examined
                    or approved any of the information in
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
                  <span>© All right reserved 2024.</span>
                  <span>
                    <a href="index.html">Spot Bitcoin ETF</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <a className="back-to-top" href="#">
            <svg className="betf-icon icon-top-arrow">
              <use xlinkHref="#icon-top-arrow" />
            </svg>
          </a>
        </footer>
    </div>
  )
}

export default Footer
