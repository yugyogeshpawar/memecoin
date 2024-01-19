import React from "react";

function Header() {
  return (
    <div>
      <header className="header" id="site-header">
        {/* End Google Tag Manager */}
        <div className="container">
          <div className="header-content-wrapper">
            <a href="index.html" className="site-logo">
              <img
                style={{ maxWidth: 50 }}
                src="img/logo-primary.png"
                alt="Spot BETF"
              />
              <span className="logo-text">Spot Bitcoin ETF</span>
            </a>
            <nav id="primary-menu" className="primary-menu">
              {/* menu-icon-wrapper */}
              <a
                href="javascript:void(0)"
                id="menu-icon-trigger"
                className="menu-icon-trigger showhide"
              >
                <span className="mob-menu--title">Menu</span>
                <span id="menu-icon-wrapper" className="menu-icon-wrapper">
                  <svg width="1000px" height="1000px">
                    <path
                      id="pathD"
                      d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"
                    ></path>
                    <path id="pathE" d="M 300 500 L 700 500" />
                    <path
                      id="pathF"
                      d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"
                    ></path>
                  </svg>
                </span>
              </a>
              <ul className="primary-menu-menu">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="menu-item-has-children">
                  <a target="_blank" href="./whitepaper.pdf">
                    Whitepaper
                  </a>
                </li>
                {/* <li class="menu-item-has-mega-menu menu-item-has-children">
							<a href="#">Coin Market</a>
							<div class="megamenu megamenu-bg">
								<div class="megamenu-row">

									<div class="col4">
										<ul>
											<li class="megamenu-item-info">
												<h5 class="megamenu-item-info-title">Tools</h5>
											</li>
											<li>
												<a href="005_coin_market.html">Global Charts</a>
											</li>
											<li>
												<a href="005_coin_market.html">Currency Converter</a>
											</li>
											<li>
												<a href="005_coin_market.html">Website Widgets</a>
											</li>
										</ul>
									</div>
									<div class="col4">
										<ul>
											<li class="megamenu-item-info">
												<h5 class="megamenu-item-info-title">Market Cap</h5>
											</li>
											<li>
												<a href="005_coin_market.html">Top 5 Coins</a>
											</li>

											<li>
												<a href="005_coin_market.html">Tokens</a>
											</li>
										</ul>
									</div>
									<div class="col4">
										<ul>
											<li class="megamenu-item-info">
												<h5 class="megamenu-item-info-title">Trending</h5>
											</li>
											<li>
												<a href="005_coin_market.html">Gainers and Losers</a>
											</li>
											<li>
												<a href="005_coin_market.html">Recently Added</a>
											</li>
										</ul>
									</div>

									<div class="col4">

									</div>

								</div>
							</div>
						</li> */}
                {/* <li class="menu-item-has-mega-menu menu-item-has-children">
							<a href="#">Events</a>

							<div class="megamenu megamenu-with-slider">

								<div class="crumina-module crumina-module-slider slider-item--equal-height">
									<div class="row">
										<div class="col-lg-3">
											<div
												class="crumina-module crumina-heading heading--with-decoration heading--h5">
												<h5 class="heading-title">Upcoming Events</h5>
												<div class="heading-text">Investigationes demonstraverunt lectores
													legere me lius quod ii legunt faucibus ac feugiat sed lectus. </div>
											</div>
											<div class="swiper-btn-wrap">
												<div class="swiper-btn-prev">
													<svg class="betf-icon icon-line-arrow-left">
														<use xlink:href="#icon-line-arrow-left"></use>
													</svg>
												</div>

												<div class="swiper-btn-next">
													<svg class="betf-icon icon-line-arrow-right">
														<use xlink:href="#icon-line-arrow-right"></use>
													</svg>
												</div>
											</div>
										</div>
										<div class="col-lg-9">
											<div class="swiper-container" data-show-items="3" data-prev-next="1">
												<div class="swiper-wrapper">
													<div class="swiper-slide">
														<a href="006_events.html"
															class="crumina-module crumina-event-item">
															<div class="event-thumb bg-event1">
																<div class="overlay"></div>
															</div>
															<div class="event-content">
																<div class="event-date">
																	<svg class="betf-icon icon-school-calendar">
																		<use xlink:href="#icon-school-calendar"></use>
																	</svg>
																	March 16, 2018
																</div>
																<h6 class="event-title">What is Bitcoin? A Step-By-Step
																	Guide For Beginners</h6>
															</div>
														</a>
													</div>
													<div class="swiper-slide">
														<a href="007_event_details.html"
															class="crumina-module crumina-event-item">
															<div class="event-thumb bg-event2">
																<div class="overlay"></div>
															</div>
															<div class="event-content">
																<div class="event-date">
																	<svg class="betf-icon icon-school-calendar">
																		<use xlink:href="#icon-school-calendar"></use>
																	</svg>
																	March 16, 2018
																</div>
																<h6 class="event-title">Apply them in Your Own Routines
																</h6>
															</div>
														</a>
													</div>
													<div class="swiper-slide">
														<a href="008_event_register.html"
															class="crumina-module crumina-event-item">
															<div class="event-thumb bg-event3">
																<div class="overlay"></div>
															</div>
															<div class="event-content">
																<div class="event-date">
																	<svg class="betf-icon icon-school-calendar">
																		<use xlink:href="#icon-school-calendar"></use>
																	</svg>
																	March 16, 2018
																</div>
																<h6 class="event-title">Is your business ready for a
																	production blockchain rollout?</h6>
															</div>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>
						</li> */}
                {/* <li class="">
							<a href="011_contacts.html">Contacts</a>
						</li> */}
              </ul>
            </nav>
            <ul className="socials socials--white">
              <li className="social-item">
                <a target="_blank" href="https://twitter.com/Spot_BitcoinETF">
                  <svg
                    className="svg-inline--fa fa-twitter fa-w-16 betf-icon"
                    aria-hidden="true"
                    data-prefix="fab"
                    data-icon="twitter"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path>
                  </svg>
                  {/* <i class="fab fa-twitter betf-icon"></i> */}
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
                  {/* <i class="fab fa-dribbble betf-icon"></i> */}
                </a>
              </li>
              <li className="social-item">
                <a target="_blank" href="mailto:info@bitcoin-etf.club">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={24}
                    zoomAndPan="magnify"
                    viewBox="0 0 30 30.000001"
                    height={24}
                    style={{ marginTop: 8 }}
                    preserveAspectRatio="xMidYMid meet"
                    version={1.0}
                  >
                    <defs>
                      <clipPath id="0b68188abf">
                        <path
                          d="M 0.484375 0 L 29.515625 0 L 29.515625 29.03125 L 0.484375 29.03125 Z M 0.484375 0 "
                          clipRule="nonzero"
                        />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#0b68188abf)">
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
      </header>
    </div>
  );
}

export default Header;
