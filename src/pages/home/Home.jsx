import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.scss";
import Banner from "../../sections/banner/Banner";

const url =
  "https://raw.githubusercontent.com/mizanurrrahaman/jobs-portal/main/src/data/homeData.json";
const Home = () => {
  const [homeData, setHomeData] = useState([]);

  // fetch data
  useEffect(() => {
    const data = async () => {
      let fetchData = await axios.get(url);
      setHomeData(fetchData.data);
    };
    data();
  }, []);
  return (
    <section className="home">
      <div className="container">
        {homeData.map((item, index) => (
          <div key={index}>
            <Banner bannerData={item.heroSection} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
