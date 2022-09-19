import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { useParams } from "react-router-dom";
import { getUserInfo } from "../../services/Api";
import { userDataModel } from "../../services/UserDataModel";
import Activity from "../../components/activity/Activity";
import Sessions from "../../components/sessions/Sessions";
import Performance from "../../components/performance/Performance";
import Score from "../../components/score/Score";
import Nutrition from "../../components/Nutrition/Nutrition";

/**
 * I'm using a custom hook to get the user's id from the url, then I'm using the id to get the user's
 * data from an API, then I'm formatting the data and setting it to the user state, then I'm setting
 * the isLoading state to true, then I'm returning the dashboard component.
 * @type {function}
 * @returns A React component.
 * @author Philippe Guyon
 * @version 1.0
 */
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

  if (isLoading) {
    return (
      <main className="dashboard__wrapper">
        <h1>
          Bonjour{" "}
          <span className="dashboard__span">{user.userInfos["firstName"]}</span>
        </h1>
        <p>Félicitation! Vous avez explosé vos objectifs hier 👋 </p>
        <div className="dashboard__content">
          <section className="dashboard__data">
            <Activity userId={user.id} />
            <div className="dashboard__SePerSc">
              <Sessions userId={user.id} />
              <Performance userId={user.id} />
              <Score userId={user.id} />
            </div>
          </section>
          <div className="dashboard__nutrition">
            <Nutrition keyData={user.keyData} />
          </div>
        </div>
      </main>
    );
  }
};

export default Dashboard;
