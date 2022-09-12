import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Karl from "../../assets/karl.png";
import Cecilia from "../../assets/cecilia.png";

const Home = () => {
  return (
    <section className="home__wrapper">
      <div className="home__content">
        <Link to="/dashboard/12">
          <img src={Karl} alt="Karl avatar" />
        </Link>
      </div>
      <div className="home__content">
        <Link to="/dashboard/18">
          <img src={Cecilia} alt="Cecilia avatar" />
        </Link>
      </div>
    </section>
  );
};

export default Home;
