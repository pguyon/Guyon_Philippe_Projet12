import React, { useState, useEffect } from "react";
import "./Performance.css";
import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { getUserPerformance } from "../../services/Api";
import { userDataPerformanceModel } from "../../services/UserDataModel";

const Performance = ({ userId }) => {
  const [userDataPerformance, setUserDataPerformance] = useState({});
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    getUserPerformance(userId).then((response) => {
      const formattedUserDataPerformance = new userDataPerformanceModel(
        response.data
      );
      setUserDataPerformance(formattedUserDataPerformance);
      setIsloading(true);
      return response.data;
    });
  }, [userId]);

  const activities = userDataPerformance?.kind;
  const userPerformance = userDataPerformance?.data;

  const formattedData = userPerformance?.map((item) => {
    return {
      activity: activities[item.kind],
      value: item.value,
    };
  });

  if (isLoading) {
    return (
      <ResponsiveContainer width="100%">
        <RadarChart
          outerRadius="62%"
          data={formattedData.reverse()}
          className="radar">
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dy={2}
            dataKey="activity"
            stroke="#FFF"
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <Radar dataKey="value" fill="red" stroke="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
};

Performance.propTypes = {
  userId: PropTypes.number.isRequired,
}

export default Performance;
