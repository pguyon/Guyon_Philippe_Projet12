import React from "react";
import PropTypes from "prop-types";
import "./Nutrition.css";

const Nutrition = ({ keyData }) => {
  console.log(keyData);
  console.log(keyData.calorieCount);
  console.log(keyData.proteinCount);
  console.log(keyData.carbohydrateCount);
  console.log(keyData.lipidCount);

  return (
    <div>
      <div>{/* <span>{user.keyData["calorieCount"]} Kcal</span> */}</div>
    </div>
  );
};

Nutrition.propTypes = {
  keyData: PropTypes.object.isRequired,
};

export default Nutrition;
