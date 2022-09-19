import React, { useState, useEffect } from "react";
import "./Score.css";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { getUserInfo } from "../../services/Api";
import { userDataModel } from "../../services/UserDataModel";
import PropTypes from "prop-types";

/**
 * It's a React component that displays a pie chart with a percentage of the user's score.
 * @type {function}
 * @param {number} userId
 * @returns The component is being returned.
 * @author Philippe Guyon
 * @version 1.0
 */
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

  if (isLoading) {
    return (
      <section className="radial">
        <h3 className="title">Score</h3>
        <div className="label">
          <span className="score">{`${score ? score * 100 : "0"} %`}</span>
          <br /> de votre <br /> objectif
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={formatedData}
              dataKey="value"
              nameKey="name"
              fill="#FF0000"
              innerRadius="60%"
              outerRadius="70%"
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

/* A prop type validation. It is checking that the prop `userId` is a number. */
Score.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Score;
