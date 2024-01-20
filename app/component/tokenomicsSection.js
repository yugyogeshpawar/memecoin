import React from 'react'

function TokenomicsSection() {
  return (
    <div>
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
                    <p className=" heading-text">The tokenomics</p>
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
    </div>
  )
}

export default TokenomicsSection
