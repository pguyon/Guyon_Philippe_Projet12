import React from "react";
import "./Loader.css";

/**
 * It returns a div with a class of loading, which contains a div with a class of loading, which
 * contains a div with a class of loading__one, which contains a div with a class of loading__two.
 * @returns A React component.
 * @author Philippe Guyon
 * @version 1.0
 */
const Loader = () => {
  return (
    <div className="loading">
      <div className="loading">
        <div className="loading__one">
          <div className="loading__two"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
