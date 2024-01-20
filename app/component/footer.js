import React from 'react'
import Social from './menu/social'

function Footer() {
  return (
    <div>
      <footer id="site-footer" className="footer ">
          <canvas id="can" />
          <div className="container crumina-heading">
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
                    <Social />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container crumina-heading">
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
            <div className="container crumina-heading">
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
