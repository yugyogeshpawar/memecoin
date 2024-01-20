import React from "react";

function Accordian({ name, detail }) {
  return (
    <li className="accordion-panel">
      <div className="panel-heading">
        <a
          href="#toggleSample6"
          className="accordion-heading collapsed"
          data-toggle="collapse"
          data-parent="#accordion"
          aria-expanded="false"
        >
          <span className="title">{name}</span>
          <span className="icons">
            <svg className="betf-icon icon-arrow-bottom">
              <use xlinkHref="#icon-arrow-bottom" />
            </svg>
          </span>
        </a>
      </div>
      <div
        id="#toggleSample6"
        className="panel-collapse collapse in"
        aria-expanded="false"
        role="tree"
      >
        <div className="panel-info ">{details}</div>
      </div>
    </li>
  );
}

export default Accordian;
