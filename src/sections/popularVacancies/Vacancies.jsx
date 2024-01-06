import React from "react";
import "./vacancies.scss";

const Vacancies = ({ vacancyData }) => {
  console.log(vacancyData);
  const { title, Anesthesiologists } = vacancyData;
  return (
    <section className="vacancies">
      <div className="container">
        <h2>{title}</h2>
        <div className="vacancies_wrapper">
          <div className="vacancy_item">
            <h4>{Anesthesiologists.title}</h4>
            <p>{Anesthesiologists.openPositions} Open Piositions</p>
          </div>
          <div className="vacancy_item">
            <h4>{Anesthesiologists.title}</h4>
            <p>{Anesthesiologists.openPositions} Open Piositions</p>
          </div>
          <div className="vacancy_item">
            <h4>{Anesthesiologists.title}</h4>
            <p>{Anesthesiologists.openPositions} Open Piositions</p>
          </div>
          <div className="vacancy_item">
            <h4>{Anesthesiologists.title}</h4>
            <p>{Anesthesiologists.openPositions} Open Piositions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vacancies;
