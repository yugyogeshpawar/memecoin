import React from "react";
import Homemenu from "./home";
import Logo from "./logo";
import Social from "./social";

const menus = [
  { name: "Home", link: "/index.html" },
  { name: "Whitepaper", link: "../whitepaper.pdf", target: "_blank"  },
];

function Menu() {
  return (
    <div>
      <header className="header" id="site-header">
        {/* End Google Tag Manager */}
        <div className="container">
          <div className="header-content-wrapper">
            <Logo />

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
                {menus.map((item, index) => (
                  <Homemenu key={index} url={item.link} title={item.name} target={item.target}/>
                ))}
                
                </ul>
            </nav>

            <ul className="socials socials--white">
              <Social />
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Menu;
