import React from "react";

function Homemenu({ url, title,target }) {
    console.log( url)
  return (
    <li>
      <a href={url} target={target === "_blank" ? "_blank" : "_self"}>{title}</a>
    </li>
  );
}

export default Homemenu;
