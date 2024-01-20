import React from "react";
import Commingsoon from "./commingsoon";

function EtfSection() {
  const etfSection = [
    { name: "Comming Soon", info: "Comming Soon in Some Exchanges" },
    { name: "Comming Soon", info: "Comming Soon in Some Exchanges" },
  ];
  return (
    <div>
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
                {etfSection.map((item, index) => (
                  <Commingsoon key={index} name={item.name} info={item.info} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EtfSection;
