import React from "react";
import PropTypes from "prop-types";
import "./Nutrition.css";
import Calories from "../../assets/calories-icon.png";
import Fat from "../../assets/fat-icon.png";
import Carb from "../../assets/carbs-icon.png";
import Protein from "../../assets/protein-icon.png";

const Nutrition = ({ keyData }) => {
  console.log(keyData);
  console.log(keyData.calorieCount);
  console.log(keyData.proteinCount);
  console.log(keyData.carbohydrateCount);
  console.log(keyData.lipidCount);

  return (
    <div>
      <div className="nutrition__wrapper">
        <img src={Calories} alt="calories icon" />
        <div className="nutrition__details">
          <span className="nutrition__data">{keyData.calorieCount}kCal</span>
          <span className="nutrition__name">Calories</span>
        </div>
      </div>
    </div>
  );
};

Nutrition.propTypes = {
  keyData: PropTypes.object.isRequired,
};

export default Nutrition;
