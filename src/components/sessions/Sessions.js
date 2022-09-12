import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Sessions.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
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
      <section>
        <h3 className="sessions__title">
          Durée moyenne des <br />
          sessions
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
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
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#000",
                strokeOpacity: 0.1,
                strokeWidth: 40,
              }}
              labelStyle={{
                display: "none",
              }}
              itemStyle={{
                color: "#000",
              }}
            />
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
        </ResponsiveContainer>
      </section>
    );
  }
};

Sessions.propTypes = {
  userId: PropTypes.number.isRequired,
  payload: PropTypes.object,
  active: PropTypes.bool,
};

export default Sessions;
