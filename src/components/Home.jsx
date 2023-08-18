import React from "react";
import { Link } from "react-router-dom";
import HomeTop from "./HomeTop";

const Home = () => {
  return (
    <>
      <HomeTop />
      <div className="home container" id="home">
        <div className="homeText">
          <p className=" text-2xl sm:text-3xl text-white text-center">
            Women's Fall-Winter 2023 Collection
          </p>
          <Link to="/products" className="text-white text-center homeLink">
            Discover the Collection
          </Link>
        </div>
        <video
          className="myVideo"
          src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/LYdjucuwQl_HD.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
        <video
          className="mySecondVideo"
          src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/mjeVPr3Eq8_MD.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </>
  );
};

export default Home;
