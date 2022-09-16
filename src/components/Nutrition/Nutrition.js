import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Nutrition.css";
import { getUserInfo } from "../../services/Api";
import { userDataModel } from "../../services/UserDataModel";

const Nutrition = ({ userId }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    getUserInfo(userId).then((response) => {
      const formattedUserData = new userDataModel(response.data);
      setUser(formattedUserData);
      setIsloading(true);
      return response.data;
    });
  }, [userId]);

  if (isLoading) {
    console.log(user.keyData["calorieCount"]);
  }


  if(isLoading){
    return <div>
        <div>
            <span>{user.keyData["calorieCount"]} Kcal</span>
        </div>
    </div>;
};
  }


Nutrition.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Nutrition;
