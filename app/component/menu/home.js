import React from "react";

function Homemenu({ url, title,target }) {
    console.log( url)
  return (
    <li>
      <a href={url} target={target?target:`munna`}>{title}</a>
    </li>
  );
}

export default Homemenu;
