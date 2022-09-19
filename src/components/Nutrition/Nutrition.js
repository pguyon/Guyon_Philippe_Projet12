import React from "react";
import PropTypes from "prop-types";
import "./Nutrition.css";
import Calories from "../../assets/calories-icon.png";
import Fat from "../../assets/fat-icon.png";
import Carb from "../../assets/carbs-icon.png";
import Protein from "../../assets/protein-icon.png";

/**
 * It takes a prop called keyData, which is an object, and returns a React Fragment with four divs,
 * each containing an image and a div with two spans.
 * @type {function}
 * @param {object} keyData
 * @returns A React component
 * @author Philippe Guyon
 * @version 1.0
 */
const Nutrition = ({ keyData }) => {
  /* Taking the calorieCount property of the keyData object, converting it to a string, and then taking
the first character and adding a comma, and then taking the next five characters. */
  const cal =
    keyData.calorieCount.toString().substr(0, 1) +
    "," +
    keyData.calorieCount.toString().substr(1, 5);

  return (
    <React.Fragment>
      <div className="nutrition__content">
        <img src={Calories} alt="calories icon" />
        <div className="nutrition__details">
          <span className="nutrition__data">{cal}kCal</span>
          <span className="nutrition__name">Calories</span>
        </div>
      </div>
      <div className="nutrition__content">
        <img src={Protein} alt="protein icon" />
        <div className="nutrition__details">
          <span className="nutrition__data">{keyData.proteinCount}g</span>
          <span className="nutrition__name">Protéines</span>
        </div>
      </div>
      <div className="nutrition__content">
        <img src={Carb} alt="glucid icon" />
        <div className="nutrition__details">
          <span className="nutrition__data">{keyData.carbohydrateCount}g</span>
          <span className="nutrition__name">Glucides</span>
        </div>
      </div>
      <div className="nutrition__content">
        <img src={Fat} alt="lipid icon" />
        <div className="nutrition__details">
          <span className="nutrition__data">{keyData.lipidCount}g</span>
          <span className="nutrition__name">Lipides</span>
        </div>
      </div>
    </React.Fragment>
  );
};

/* A property of the Nutrition component that is used to validate the props of the component. */
Nutrition.propTypes = {
  keyData: PropTypes.object.isRequired,
};

export default Nutrition;
