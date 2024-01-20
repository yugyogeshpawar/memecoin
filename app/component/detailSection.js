import React from 'react'
import Btn from '../component/button'

function DetailSection() {
  return (
    <div>
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
                  <Btn name={"Details"} url={"/"} />
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default DetailSection
