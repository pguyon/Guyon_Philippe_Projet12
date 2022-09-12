import React, { useState, useEffect } from "react";
import "./Performance.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
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

  // console.log(activities);
  console.log(userPerformance);

  if (isLoading) {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={formattedData.reverse()}
          className="radar">
          <PolarGrid />
          <PolarAngleAxis
            dataKey="activity"
            stroke="#FFF"
            tickLine={false}
            tick={{
              fontSize: 8,
              fontWeight: 500,
            }}
          />
          <PolarRadiusAxis />
          <Radar dataKey="value" fill="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
};

export default Performance;
