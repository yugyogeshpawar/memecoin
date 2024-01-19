import Script from "next/script";
import Header from "./component/header";
import Footer from "./component/footer";
import DetailSection from "./component/detailSection";
import SbetfSection from "./component/sbetfSection";
import EtfSection from "./component/etfSection";
import TokenomicsSection from "./component/tokenomicsSection";
import RoadmapSection from "./component/roadmapSection";

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
        <Header />
        {/* ... end Header */}

        <div className="main-content-wrapper">
          <DetailSection />
          <SbetfSection />
          <EtfSection />
          <TokenomicsSection />
          <RoadmapSection />
        </div>

        {/* Footer */}
        <Footer />
        {/* Footer-End*/}
        
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
