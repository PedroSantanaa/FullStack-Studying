import React, { Fragment, useState } from "react";

export const Form = (props) => {
  const inicialFields = {
    id: "",
    name: "",
    description: "",
    link: "",
    img_url: "",
  };
  const [fields, setFields] = useState(inicialFields);
  const handleFields = (ev) =>
    setFields({
      ...fields,
      [ev.currentTarget.name]: ev.currentTarget.value,
    });
  const handleSubmit = (ev) => {
    ev.preventDefault();
    props.addPlanet(fields);
    setFields(inicialFields);
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">Id(name of the planet):</label>
          <input
            type="text"
            id="id"
            name="id"
            value={fields.id}
            onChange={handleFields}
          />
        </div>
        <div>
          <label htmlFor="name">New Planet:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={fields.name}
            onChange={handleFields}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={fields.description}
            onChange={handleFields}
          />
        </div>
        <div>
          <label htmlFor="link">Link:</label>
          <input
            type="text"
            id="link"
            name="link"
            value={fields.link}
            onChange={handleFields}
          />
        </div>
        <div>
          <label htmlFor="img_url">Image:</label>
          <input
            type="text"
            id="img_url"
            name="img_url"
            value={fields.img_url}
            onChange={handleFields}
          />
        </div>
        <br />
        <input type="submit" />
      </form>
    </Fragment>
  );
};
