import Script from "next/script";

export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <title>Spot Bitcoin ETF - Home Page</title>
      <link rel="stylesheet" type="text/css" href="css/plugins.css" />
      <link rel="stylesheet" type="text/css" href="css/plugins.css" />
      <link rel="stylesheet" type="text/css" href="css/theme-styles.css" />
      <link rel="stylesheet" type="text/css" href="css/blocks.css" />
      <link rel="stylesheet" type="text/css" href="css/widgets.css" />
      <link rel="stylesheet" type="text/css" href="css/font-awesome.css" /> 
      <link rel="stylesheet" type="text/css" href="css/style5.css" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700i,900,"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\t\t.logo-text {\n\t\t\tfont-size: large;\n\t\t\tfont-weight: 800;\n\t\t\tcolor: white;\n\t\t}\n\n\t\t.bg-1 {\n\t\t\tbackdrop-filter: contrast(100%);\n\t\t}\n\n\t\t.main img {\n\t\t\tmax-width: 300px;\n\t\t}\n\n\t\t.main {\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t.canvas-doughnut {\n\t\t\twidth: 600px;\n\t\t\theight: 300px;\n\t\t\tdisplay: block;\n\t\t\tmargin-top: 20px;\n\t\t}\n\t",
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\t\t.f-size-20 {\n\t\t\tfont-size: 30px;\n\t\t}\n\n\t\t.flex {\n\t\t\t-webkit-box-flex: 1;\n\t\t\t-ms-flex: 1 1 auto;\n\t\t\tflex: 1 1 auto\n\t\t}\n\n\t\t@media (max-width:991.98px) {\n\t\t\t.padding {\n\t\t\t\tpadding: 1.5rem\n\t\t\t}\n\t\t}\n\n\t\t@media (max-width:767.98px) {\n\t\t\t.padding {\n\t\t\t\tpadding: 1rem\n\t\t\t}\n\t\t}\n\n\t\tbody {\n\t\t\tscroll-behavior: smooth;\n\t\t}\n\n\n\t\t.padding {\n\t\t\tpadding: 5rem\n\t\t}\n\n\t\t.card {\n\t\t\tborder-width: 0;\n\t\t\tborder-radius: .25rem;\n\t\t\tbox-shadow: 0 1px 3px rgba(0, 0, 0, .05);\n\t\t\tmargin-bottom: 1.5rem\n\t\t}\n\n\t\t.card {\n\t\t\tposition: relative;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tmin-width: 0;\n\t\t\tword-wrap: break-word;\n\t\t\tbackground-clip: border-box;\n\t\t\tborder: 1px solid rgba(19, 24, 44, .125);\n\t\t\tborder-radius: .25rem\n\t\t}\n\n\t\t.card-header {\n\t\t\tpadding: .75rem 1.25rem;\n\t\t\tmargin-bottom: 0;\n\t\t\tbackground-color: rgba(19, 24, 44, .03);\n\t\t\tborder-bottom: 1px solid rgba(19, 24, 44, .125)\n\t\t}\n\n\t\t.card-header:first-child {\n\t\t\tborder-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0\n\t\t}\n\n\t\tcard-footer,\n\t\t.card-header {\n\t\t\tbackground-color: transparent;\n\t\t\tborder-color: rgba(160, 175, 185, .15);\n\t\t\tbackground-clip: padding-box\n\t\t}\n\n\t\t.responsive-width-50 {\n\t\t\ttransition: transform 0.3s ease-in-out;\n\t\t}\n\n\t\t/* Define the larger size for the hover state */\n\t\t.responsive-width-50:hover {\n\t\t\ttransform: scale(1.1);\n\t\t\t/* Increase the size, adjust the scale factor as needed */\n\t\t}\n\n\t\t.responsive-width-100 {\n\t\t\ttransition: transform 0.3s ease-in-out;\n\t\t}\n\n\t\t.responsive-width-100:hover {\n\t\t\ttransform: scale(1.1);\n\t\t}\n\n\n\t\t/* Add transitions to the main sections */\n\t\t.main-section,\n\t\t.medium-padding120,\n\t\t.bg-dotted-map,\n\t\t.crumina-section,\n\t\t.roadmap-area {\n\t\t\ttransition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;\n\t\t}\n\n\t\t/* Hover effect on main sections */\n\t\t.main-section:hover,\n\t\t.medium-padding120:hover,\n\t\t.bg-dotted-map:hover,\n\t\t.crumina-section:hover,\n\t\t.roadmap-area:hover {\n\t\t\t/* background-color: #f8f8f8; */\n\t\t\ttransform: scale(1.02);\n\t\t}\n\n\t\t/* Add transitions to the headings */\n\t\t.crumina-heading {\n\t\t\ttransition: color 0.3s ease-in-out, transform 0.3s ease-in-out;\n\t\t}\n\n\t\t/* Hover effect on headings */\n\t\t.crumina-heading:hover {\n\t\t\t/* color: #333; */\n\t\t\ttransform: translateY(-3px);\n\t\t}\n\n\t\t/* Add transitions to the buttons */\n\t\t.btn {\n\t\t\ttransition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;\n\t\t}\n\n\t\t/* Hover effect on buttons */\n\t\t.btn:hover {\n\t\t\t/* background-color: #3498db; */\n\t\t\ttransform: scale(1.05);\n\t\t}\n\n\t\t/* Define the bounce animation */\n\t\t@keyframes bounce {\n\n\t\t\t0%,\n\t\t\t20%,\n\t\t\t50%,\n\t\t\t80%,\n\t\t\t100% {\n\t\t\t\ttransform: translateY(0);\n\t\t\t}\n\n\t\t\t40% {\n\t\t\t\ttransform: translateY(-10px);\n\t\t\t}\n\n\t\t\t60% {\n\t\t\t\ttransform: translateY(-5px);\n\t\t\t}\n\t\t}\n\n\t\t/* Apply the animation to the heading */\n\t\t.crumina-heading {\n\t\t\tanimation: bounce 2s infinite;\n\t\t}\n\n\t\t/* Stop the animation on hover for a moment */\n\t\t.crumina-heading:hover {\n\t\t\tanimation: none;\n\t\t}\n\t",
        }}
      />

      <>
        {/*<div id="hellopreloader">
	<div class="preloader">
		<svg width="135" height="140" fill="#fff">
			<rect width="15" height="120" y="10" rx="6">
				<animate attributeName="height" begin="0.5s" calcMode="linear" dur="1s" repeatCount="indefinite" values="120;110;100;90;80;70;60;50;40;140;120" />
				<animate attributeName="y" begin="0.5s" calcMode="linear" dur="1s" repeatCount="indefinite" values="10;15;20;25;30;35;40;45;50;0;10" />
			</rect>
			<rect width="15" height="120" x="30" y="10" rx="6">
				<animate attributeName="height" begin="0.25s" calcMode="linear" dur="1s" repeatCount="indefinite" values="120;110;100;90;80;70;60;50;40;140;120" />
				<animate attributeName="y" begin="0.25s" calcMode="linear" dur="1s" repeatCount="indefinite" values="10;15;20;25;30;35;40;45;50;0;10" />
			</rect>
			<rect width="15" height="140" x="60" rx="6">
				<animate attributeName="height" begin="0s" calcMode="linear" dur="1s" repeatCount="indefinite" values="120;110;100;90;80;70;60;50;40;140;120" />
				<animate attributeName="y" begin="0s" calcMode="linear" dur="1s" repeatCount="indefinite" values="10;15;20;25;30;35;40;45;50;0;10" />
			</rect>
			<rect width="15" height="120" x="90" y="10" rx="6">
				<animate attributeName="height" begin="0.25s" calcMode="linear" dur="1s" repeatCount="indefinite" values="120;110;100;90;80;70;60;50;40;140;120" />
				<animate attributeName="y" begin="0.25s" calcMode="linear" dur="1s" repeatCount="indefinite" values="10;15;20;25;30;35;40;45;50;0;10" />
			</rect>
			<rect width="15" height="120" x="120" y="10" rx="6">
				<animate attributeName="height" begin="0.5s" calcMode="linear" dur="1s" repeatCount="indefinite" values="120;110;100;90;80;70;60;50;40;140;120" />
				<animate attributeName="y" begin="0.5s" calcMode="linear" dur="1s" repeatCount="indefinite" values="10;15;20;25;30;35;40;45;50;0;10" />
			</rect>
		</svg>

		<div class="text">Loading ...</div>
	</div>
</div>*/}
        {/* ... end Preloader */}
        {/* Header */}
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
        {/* ... end Header */}
        <div className="main-content-wrapper">
          <section
            data-settings="particles-1"
            className="main-section crumina-flying-balls particles-js bg-1 medium-padding120 responsive-align-center"
          >
            <div className="container">
              <div className="row">
                <div className="main col-lg-5 col-md-12 col-sm-12 col-xs-12">
                  <img
                    className=" responsive-width-50"
                    src="img/main.png"
                    alt="image"
                  />
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                  <header className="crumina-module crumina-heading heading--h1 heading--with-decoration">
                    {/* Google Tag Manager */}
                    {/* End Google Tag Manager */}
                    <h1 className="heading-title f-size-50 weight-normal no-margin">
                      Welcome to <br />{" "}
                      <span className="weight-bold"> Spot Bitcoin ETF</span>
                    </h1>
                    <h2 className="c-primary">
                      The Digital Gold (the meme-tility Token).
                    </h2>
                  </header>
                  <a
                    data-scroll=""
                    href="#details"
                    className="btn btn--large btn--transparent btn--secondary"
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="medium-padding120 responsive-align-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
                    {/* Google Tag Manager */}
                    {/* End Google Tag Manager */}
                    <div className="heading-sup-title">Why SBETF?</div>
                    <h2 className="f-size-20 heading-title weight-normal">
                      The SBETF journey is at the intersection
                      <span className="weight-bold">
                        of innovation and community-driven success.
                      </span>
                    </h2>
                    <div
                      className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb30"
                      style={{ paddingLeft: 0, paddingRight: 0 }}
                    >
                      <ul
                        className="crumina-module crumina-accordion accordion--style5"
                        id="accordion6"
                      >
                        <li className="accordion-panel">
                          <div className="panel-heading">
                            <a
                              href="#toggleSample6"
                              className="accordion-heading collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              aria-expanded="false"
                            >
                              <span className="title">
                                Blackrock ETF Trading Rewards :
                              </span>
                              <span className="icons">
                                <svg className="betf-icon icon-arrow-bottom">
                                  <use xlinkHref="#icon-arrow-bottom" />
                                </svg>
                              </span>
                            </a>
                          </div>
                          <div
                            id="toggleSample6"
                            className="panel-collapse collapse in"
                            aria-expanded="false"
                            role="tree"
                          >
                            <div className="panel-info">
                              SBETF will invest part of its token supply in the
                              popular Spot Bitcoin ETFs. The profits from this
                              investment will be shared with the community
                              through staking rewards and other programs. This
                              makes SBETF the first token to invest in a Bitcoin
                              ETF and give back to its community.
                            </div>
                          </div>
                        </li>
                        <li className="accordion-panel">
                          <div className="panel-heading">
                            <a
                              href="#toggleOne6"
                              className="accordion-heading collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              aria-expanded="false"
                            >
                              <span className="title">
                                Exclusive NFT Collection and Marketplace:
                              </span>
                              <span className="icons">
                                <svg className="betf-icon icon-arrow-bottom">
                                  <use xlinkHref="#icon-arrow-bottom" />
                                </svg>
                              </span>
                            </a>
                          </div>
                          <div
                            id="toggleOne6"
                            className="panel-collapse collapse"
                            aria-expanded="false"
                            role="tree"
                          >
                            <div className="panel-info">
                              The NFTs will be created with popular meme artists
                              to showcase their creativity, so you can own a
                              piece of digital art that's truly unique. The NFTs
                              will be released in batches, with each batch
                              featuring a different theme. The first batch of
                              NFTs will be released in Q2 2024. SBETF introduces
                              an exclusive ecosystem and marketplace for such
                              NFTs.
                            </div>
                          </div>
                        </li>
                        <li className="accordion-panel">
                          <div className="panel-heading">
                            <a
                              href="#toggleTwo6"
                              className="accordion-heading collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              aria-expanded="false"
                            >
                              <span className="title">
                                Staking and Rewards :
                              </span>
                              <span className="icons">
                                <svg className="betf-icon icon-arrow-bottom">
                                  <use xlinkHref="#icon-arrow-bottom" />
                                </svg>
                              </span>
                            </a>
                          </div>
                          <div
                            id="toggleTwo6"
                            className="panel-collapse collapse"
                            aria-expanded="false"
                            role="tree"
                          >
                            <div className="panel-info">
                              Participate in the SBETF ecosystem by staking your
                              tokens and earn rewards. These rewards will be
                              used to buy more tokens, creating a sustainable
                              and thriving community..
                            </div>
                          </div>
                        </li>
                        <li className="accordion-panel">
                          <div className="panel-heading">
                            <a
                              href="#toggleSample6"
                              className="accordion-heading collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              aria-expanded="false"
                            >
                              <span className="title">Meme GPT:</span>
                              <span className="icons">
                                <svg className="betf-icon icon-arrow-bottom">
                                  <use xlinkHref="#icon-arrow-bottom" />
                                </svg>
                              </span>
                            </a>
                          </div>
                          <div
                            id="toggleSample6"
                            className="panel-collapse collapse in"
                            aria-expanded="false"
                            role="tree"
                          >
                            <div className="panel-info">
                              Our homegrown gen AI model to build your own meme.
                              Our token holders will get early access to this
                              tool.
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* <div class="heading-text">Exclusive NFT Collection:
							</div>
						</header>


						<p> SBETF is creating an exclusive NFT collection for its community members. The NFTs will be
							created using memes and AI, so you can own a piece of digital art that's truly unique. The
							NFTs will be released in batches, with each batch featuring a different theme. The first
							batch of NFTs will be released in Q2 2024.
						</p>
						<header class="crumina-module crumina-heading heading--h2 heading--with-decoration">
							<div class="heading-text">Staking and Rewards:
							</div>
						</header>
						<p>
							You can earn SBETF tokens by staking them. This is a great way to earn passive income and
							grow your SBETF holdings. When you stake your SBETF tokens, you are essentially locking them
							up for a period of time. In exchange, you will receive rewards in the form of additional
							SBETF tokens. The amount of rewards you earn will depend on the length of time you stake
							your
							tokens for and the current staking APR.
						</p> */}
                    <div className=" mt60">
                      <a
                        href="#"
                        className="btn btn--market btn--apple btn--with-icon btn--icon-left"
                      >
                        <div className="text">
                          <span className="title">More Info</span>
                        </div>
                      </a>
                    </div>
                  </header>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt30">
                  <img
                    className="responsive-width-100"
                    src="img/phone.png"
                    alt="phone"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-dotted-map">
            <div className="container">
              <div className="row medium-padding300 align-center">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <img
                    className="primary-dots mb30"
                    src="img/dots.png"
                    alt="dots"
                  />
                  <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
                    {/* Google Tag Manager */}
                    {/* End Google Tag Manager */}
                    <h2 className="heading-title weight-normal">
                      Invest in the Future.
                      <span className="weight-bold">Invest in SBETF.</span>
                    </h2>
                    <div className="heading-text">Spot Bitcoin ETF</div>
                  </header>
                  <div className="counters">
                    {/* <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
								<div class="crumina-module crumina-counter-item">
									<div class="counter-numbers counter">
										<span data-speed="2000" data-refresh-interval="3" data-to="6386"
											data-from="2"></span>
									</div>
									<h4 class="counter-title">Market price</h4>
									<p class="counter-text">Claritas est etiam processus dynamicus, sequitur
										consuetudium lectorum.</p>
									<div class="counter-line"></div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
								<div class="crumina-module crumina-counter-item">
									<div class="counter-numbers counter">
										<span data-speed="2000" data-refresh-interval="3" data-to="16"
											data-from="2">16</span>
										<div class="units">mb</div>
									</div>
									<h4 class="counter-title">Average block size</h4>
									<p class="counter-text">Sem integer vitae justo eget magna. Eget nullam non nisi est
										sit amet. Nec ultrices dui sapien eget mi proin. Commodo sed egestas egestas.
									</p>
									<div class="counter-line"></div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
								<div class="crumina-module crumina-counter-item">
									<div class="counter-numbers counter">
										<span data-speed="2000" data-refresh-interval="3" data-to="8327"
											data-from="2"></span>
										<div class="units"></div>
									</div>
									<h4 class="counter-title">Clients worldwide</h4>
									<p class="counter-text">Gravida rutrum quisque non tellus orci ac. Elit duis
										tristique sollicitudin nibh sit amet commodo nulla facilisi.</p>
									<div class="counter-line"></div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
								<div class="crumina-module crumina-counter-item">
									<div class="counter-numbers counter">
										<span data-speed="2000" data-refresh-interval="3" data-to="2000"
											data-from="2"></span>
										<div class="units">+</div>
									</div>
									<h4 class="counter-title">Transactions</h4>
									<p class="counter-text">Feugiat in ante metus dictum at tempor commodo urna nunc id
										cursus.</p>
									<div class="counter-line"></div>
								</div>
							</div> */}
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="crumina-module crumina-counter-item">
                        <h4 className="counter-title">Comming Soon</h4>
                        <p className="counter-text">
                          Comming Soon in Some Exchanges
                        </p>
                        <div className="counter-line" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="crumina-module crumina-counter-item">
                        <h4 className="counter-title">Comming Soon</h4>
                        <p className="counter-text">
                          Comming Soon in Some Exchanges
                        </p>
                        <div className="counter-line" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="crumina-module crumina-section"
            style={{ paddingBottom: 20 }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt30">
                  <div className="crumina-module crumina-heading heading--h2 heading--with-decoration">
                    <div className="heading-sup-title">Tokenomics</div>
                    <h2 className="heading-title weight-normal">
                      The
                      <span className="weight-bold">tokenomics</span>
                    </h2>
                    <p className="heading-text">The tokenomics</p>
                    <p className="text">
                      SBETF believes in transparent transactions. There are zero
                      taxes when buying SBETF tokens, and a nominal 0.5% tax is
                      applied when selling, ensuring a fair and accessible
                      market for all.
                    </p>
                    <p>
                      Join us on this exciting journey, Be part of the Memecoin
                      revolution that is not just about memes but a
                      community-driven force with real-world utility.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="crumina-module crumina-heading heading--h2 heading--with-decoration">
                    {/* <div class="page-content page-container" id="page-content">
								<div class="container-fluid d-flex justify-content-center">
									<div class="col-sm-12 col-md-12"> */}
                    <div className="card">
                      <div className="card-body" style={{ height: 420 }}>
                        {/* <img src="bitcoin2.svg" alt="" /> */}
                        <img src="./img/bitcoin2.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  {/* </div>
							</div>
						</div> */}
                </div>
              </div>
            </div>
          </section>
          <section id="roadmap" className="roadmap-area pt-130 pb-130">
            <div className="container custom-container-two">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-8">
                  <div className="section-title text-center mb-60">
                    <span className="sub-title">Our Roadmap</span>
                    <h2 className="title">
                      Strategy and <br />
                      Project <span>Plan</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="bt-roadmap_x mCustomScrollbar _mCS_1"
                    style={{ overflow: "visible" }}
                  >
                    <div
                      id="mCSB_1"
                      className="mCustomScrollBox mCS-custom-bar3 mCSB_horizontal mCSB_outside"
                      style={{ maxHeight: "none" }}
                      tabIndex={0}
                    >
                      <div
                        id="mCSB_1_container"
                        className="mCSB_container"
                        style={{
                          position: "relative",
                          top: 0,
                          left: 0,
                          width: 1000,
                          minWidth: "100%",
                          overflowX: "inherit",
                        }}
                        dir="ltr"
                      >
                        <div className="bt-roadmap-wrap">
                          <div className="bt-roadmap-item">
                            <span className="roadmap-title">Phase 1</span>
                            <div className="roadmap-content">
                              <span className="dot blink" />
                              <ul className="document-list">
                                <li>
                                  <i
                                    className="fas fa-check"
                                    style={{ color: "#f7931a" }}
                                  />
                                  &nbsp; Private Sale
                                </li>
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; Pre-sale
                                </li>
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; Launch
                                </li>
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; Growing Community to 20k
                                </li>
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; 1M market CAP
                                </li>
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; 2 Dex listing
                                </li>
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; Airdrop v1
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="bt-roadmap-item">
                            <span className="roadmap-title">Phase 2</span>
                            <div className="roadmap-content">
                              <span className="dot blink" />
                              <ul className="document-list">
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; Staking platform V1
                                </li>
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; Blackrock ETF Investment{" "}
                                </li>
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; 20M Market CAP{" "}
                                </li>
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; Grow Community to 50k
                                </li>
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; Cex listing
                                </li>
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; Airdrop V2
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="bt-roadmap-item">
                            <span className="roadmap-title">Phase 3</span>
                            <div className="roadmap-content">
                              <span className="dot blink" />
                              <ul className="document-list">
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; NFT collection Launch
                                </li>
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; Staking Platform V2{" "}
                                </li>
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; MEME Contest for community{" "}
                                </li>
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; Tier 1 CEX Listings
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="bt-roadmap-item">
                            <span className="roadmap-title">
                              Phase 4 &amp; beyond
                            </span>
                            <div className="roadmap-content">
                              <span className="dot" />
                              <ul className="document-list">
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; MemeGPT (AI Meme NFT builder)
                                </li>
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; NFT MarketPlace
                                </li>
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; 20M Market CAP{" "}
                                </li>
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; MEME NFT Metaverse
                                </li>
                                <li>
                                  <i style={{ color: "#f7931a" }} />
                                  &nbsp; Offer our platform to other meme coins
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Footer */}
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
        {/* ... end Footer */}
        {/* jQuery first, then Other JS. */}
        {/* FontAwesome 5.x.x JS */}
        {/* SVG icons loader */}
        {/* /SVG icons loader */}
      </>

      <Script src="js/method-assign.js"></Script>

      {/* <!-- jQuery first, then Other JS. --> */}

      <Script src="js/jquery-3.3.1.js"></Script>

      <Script src="js/js-plugins/leaflet.js"></Script>
      <Script src="js/js-plugins/MarkerClusterGroup.js"></Script>
      <Script src="js/js-plugins/crum-mega-menu.js"></Script>
      <Script src="js/js-plugins/waypoints.js"></Script>
      <Script src="js/js-plugins/jquery-circle-progress.js"></Script>
      <Script src="js/js-plugins/segment.js"></Script>
      <Script src="js/js-plugins/bootstrap.js"></Script>
      <Script src="js/js-plugins/imagesLoaded.js"></Script>
      <Script src="js/js-plugins/jquery.matchHeight.js"></Script>
      <Script src="js/js-plugins/jquery-countTo.js"></Script>
      <Script src="js/js-plugins/Headroom.js"></Script>
      <Script src="js/js-plugins/jquery.magnific-popup.js"></Script>
      <Script src="js/js-plugins/popper.min.js"></Script>
      <Script src="js/js-plugins/particles.js"></Script>
      <Script src="js/js-plugins/perfect-scrollbar.js"></Script>
      <Script src="js/js-plugins/jquery.datetimepicker.full.js"></Script>
      <Script src="js/js-plugins/svgxuse.js"></Script>
      <Script src="js/js-plugins/select2.js"></Script>
      <Script src="js/js-plugins/smooth-scroll.js"></Script>
      <Script src="js/js-plugins/sharer.js"></Script>
      <Script src="js/js-plugins/isotope.pkgd.min.js"></Script>
      <Script src="js/js-plugins/ajax-pagination.js"></Script>
      <Script src="js/js-plugins/swiper.min.js"></Script>
      <Script src="js/js-plugins/material.min.js"></Script>
      <Script src="js/js-plugins/orbitlist.js"></Script>
      <Script src="js/js-plugins/highstock.js"></Script>
      <Script src="js/js-plugins/bootstrap-datepicker.js"></Script>
      <Script src="js/js-plugins/TimeCircles.js"></Script>
      <Script src="js/js-plugins/ion.rangeSlider.js"></Script>

      {/* <!-- FontAwesome 5.x.x JS --> */}

      <Script defer src="fonts/fontawesome-all.js"></Script>

      <Script src="js/main.js"></Script>

      {/* <!-- SVG icons loader --> */}
      <Script src="js/svg-loader.js"></Script>
      {/* <!-- /SVG icons loader --> */}
    </>
  );
}
