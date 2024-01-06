import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.scss";
import Banner from "../../sections/banner/Banner";
import Vacancies from "../../sections/popularVacancies/Vacancies";
import Category from "../../sections/category/Category";

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
        {homeData.map((item, index) => {
          return (
            <>
              <div key={index}>
                <Banner bannerData={item.heroSection} />
              </div>
              <div>
                <Vacancies vacancyData={item.popularVacancies} />
              </div>
              <div>
                <Category category={item.popularCategory} />
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
