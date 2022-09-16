import React from "react";
import PropTypes from "prop-types";
import "./Nutrition.css";
import Calories from "../../assets/calories-icon.png";
import Fat from "../../assets/fat-icon.png";
import Carb from "../../assets/carbs-icon.png";
import Protein from "../../assets/protein-icon.png";

const Nutrition = ({ keyData }) => {
  //   console.log(keyData.lipidCount);

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

Nutrition.propTypes = {
  keyData: PropTypes.object.isRequired,
};

export default Nutrition;
