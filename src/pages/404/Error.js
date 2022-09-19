import React from "react";
import "./Error.css";

/**
 * It returns a div with a h1 inside
 * @type {function}
 * @returns A React component.
 * @author Philippe Guyon
 * @version 1.0
 */
const Error = () => {
  return (
    <div className="error__wrapper">
      <h1 className="error__title">Oops ! Page not found</h1>
    </div>
  );
};

export default Error;
