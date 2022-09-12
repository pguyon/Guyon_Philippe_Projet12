import React, { useState, useEffect, Fragment } from "react";
import "./Score.css";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { getUserInfo } from "../../services/Api";
import { userDataModel } from "../../services/UserDataModel";
import PropTypes from "prop-types";

const Score = ({ userId }) => {
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

  const score = user?.todayScore;
  const formatedData = [
    {
      name: "Score",
      value: score,
    },
  ];

  console.log(score);

  if (isLoading) {
    return (
      <section className="radial">
        <h3 className="title">Score</h3>
        <div className="label">
          <span className="score">{`${score ? score * 100 : "0"} %`}</span>
          <br /> de votre <br /> objectif
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart className="radial">
            <Pie
              data={formatedData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              fill="#FF0000"
              innerRadius="65%"
              outerRadius="75%"
              startAngle={90}
              endAngle={score ? 90 + score * 360 : 0}
              cornerRadius={50}
            />
          </PieChart>
        </ResponsiveContainer>
      </section>
    );
  }
};

Score.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Score;
