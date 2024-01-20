import React from 'react'

function Commingsoon({name,info}) {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="crumina-module crumina-counter-item">
                    <h4 className="counter-title">{name}</h4>
                    <p className="counter-text">
                      {info}
                    </p>
                    <div className="counter-line" />
                  </div>
                </div>
  )
}

export default Commingsoon
