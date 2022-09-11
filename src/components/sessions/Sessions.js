import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Sessions.css";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { getUserAverage } from "../../services/Api";
import { userDataAverageModel } from "../../services/UserDataModel";

const Sessions = ({ userId }) => {
  const [userDataSession, setUserDataSession] = useState({});
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    getUserAverage(userId).then((response) => {
      const formattedUserDataSession = new userDataAverageModel(response.data);
      setUserDataSession(formattedUserDataSession);
      setIsloading(true);
      return response.data;
    });
  }, [userId]);

  function CustomTooltip({ payload, active }) {
    return (
      <div className="tooltip">
        {active && <p>{`${payload[0].value}`} min</p>}
      </div>
    );
  }

  if (isLoading) {
    return (
      <LineChart
        width={258}
        height={263}
        className="container"
        data={userDataSession.sessions}
        margin={{ top: 15, left: 15, right: 15, bottom: 10 }}>
        <XAxis
          dataKey="day"
          stroke="#FFF"
          tickLine={false}
          axisLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 500,
          }}
          tickFormatter={(item) => {
            const days = ["L", "M", "M", "J", "V", "S", "D"];
            return `${days[item - 1]}`;
          }}
        />
        <YAxis hide={true} padding={{ top: 80, bottom: 30 }} />
        <Tooltip content={<CustomTooltip />} cursor={false} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#FFF"
          strokeWidth={1.5}
          dot={false}
          activeDot={{
            stroke: "#FFF",
            strokeOpacity: 0.4,
            strokeWidth: 10,
          }}
        />
      </LineChart>
    );
  }
};

Sessions.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Sessions;
