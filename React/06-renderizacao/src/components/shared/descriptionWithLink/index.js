import React, { Fragment } from "react";

export const DescriptionWithLink = (props) => {
  if (props.link) {
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
  } else {
    return (
      <Fragment>
        <p>
          <u>{props.text}</u>
        </p>
      </Fragment>
    );
  }
};
