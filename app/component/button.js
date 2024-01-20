import React from 'react'

function Btn({name,url}) {
  return (
    <a
    data-scroll=""
    href={url}
    className="btn btn--large btn--transparent btn--secondary crumina-heading"
  >
    {name}
  </a>
  )
}

export default Btn