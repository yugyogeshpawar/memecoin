import React from 'react'
import Btn from './button'



const accordionData = [
  {
    title: 'Blackrock ETF Trading Rewards',
    content: 'SBETF will invest part of its token supply in the popular Spot Bitcoin ETFs. The profits from this investment will be shared with the community through staking rewards and other programs. This makes SBETF the first token to invest in a Bitcoin ETF and give back to its community.',
  },
  {
    title: 'Exclusive NFT Collection and Marketplace',
    content: 'The NFTs will be created with popular meme artists to showcase their creativity, so you can own a piece of digital art that\'s truly unique. The NFTs will be released in batches, with each batch featuring a different theme. The first batch of NFTs will be released in Q2 2024. SBETF introduces an exclusive ecosystem and marketplace for such NFTs.',
  },
  {
    title: 'Staking and Rewards',
    content: 'Participate in the SBETF ecosystem by staking your tokens and earn rewards. These rewards will be used to buy more tokens, creating a sustainable and thriving community.',
  },
  {
    title: 'Meme GPT',
    content: 'Our homegrown gen AI model to build your own meme. Our token holders will get early access to this tool.',
  },
];

function SbetfSection() {
  return (
    <div>
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
                      {accordionData.map((item, index) => (
                        <li className="accordion-panel" key={index}>
                          <div className="panel-heading">
                            <a
                              href={`#toggle${index}`}
                              className="accordion-heading collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              aria-expanded="false"
                            >
                              <span className="title">{item.title}</span>
                              <span className="icons">
                                <svg className="betf-icon icon-arrow-bottom">
                                  <use xlinkHref="#icon-arrow-bottom" />
                                </svg>
                              </span>
                            </a>
                          </div>
                          <div
                            id={`toggle${index}`}
                            className={`panel-collapse collapse ${index === 0 ? 'in' : ''}`}
                            aria-expanded="false"
                            role="tree"
                          >
                            <div className="panel-info">{item.content}</div>
                          </div>
                        </li>
                      ))}
                      </ul>
                    </div>
                    <div className=" mt60">
                      <Btn name={"More Info"} url={"/"} />
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
    </div>
  )
}

export default SbetfSection
