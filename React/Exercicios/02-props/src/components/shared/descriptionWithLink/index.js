import React, { Fragment } from "react";

export const DescriptionWithLink = (props) => {
  return (
    <Fragment>
      <p>{props.text}</p>
      <div>
        <a href={props.link} target="_blank" rel="noreferrer">
          Link para Wikipedia
        </a>
      </div>
    </Fragment>
  );
};
