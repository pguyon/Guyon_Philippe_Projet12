import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { useParams } from "react-router-dom";
import { getUserInfo } from "../../services/Api";
import { userDataModel } from "../../services/UserDataModel";
import Error from "../404/Error";
import Activity from "../../components/activity/Activity";
import Sessions from "../../components/sessions/Sessions";
import Performance from "../../components/performance/Performance";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    getUserInfo(id).then((response) => {
      const formattedUserData = new userDataModel(response.data);
      setUser(formattedUserData);
      setIsloading(true);
      return response.data;
    });
  }, [id]);

  if (!isLoading) {
    return <p></p>;
  } else if (user === undefined) {
    return <Error />;
  } else {
    return (
      <main className="dashboard__wrapper">
        <h1>
          Bonjour <span>{user.userInfos["firstName"]}</span>
        </h1>
        <p>Félicitation! Vous avez explosé vos objectifs hier 👋 </p>
        <Activity userId={user.id} />
        <div className="dashboard__data">
          <Sessions userId={user.id} />
          <Performance userId={user.id} />
          <Sessions userId={user.id} />
        </div>
      </main>
    );
  }
};

export default Dashboard;
