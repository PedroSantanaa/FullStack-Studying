import React, { Fragment, useState } from "react";

export const FormPlanet = (props) => {
  const inicialState = {
    name: "",
  };
  const [fields, setFields] = useState(inicialState);
  const handleFields = (ev) =>
    setFields({
      ...fields,
      [ev.currentTarget.name]: ev.currentTarget.value,
    });
  const handleSubmit = (ev) => {
    ev.preventDefault();
    props.addSatellite(fields);
    setFields(inicialState);
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Satellite:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={fields.name}
            onChange={handleFields}
          />
        </div>
        <input type="submit" />
      </form>
    </Fragment>
  );
};
