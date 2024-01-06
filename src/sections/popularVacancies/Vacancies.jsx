import React from "react";
import "./vacancies.scss";

const Vacancies = ({ vacancyData }) => {
  console.log(vacancyData);
  const {
    title,
    Anesthesiologists,
    Surgeons,
    Obstetricians_Gynecologists,
    Orthodontists,
    MaxillofacialSurgeons,
    SoftwareDeveloper,
    Psychiatrists,
    DataScientist,
    FinancialManager,
    ManagementAnalysis,
    ITManager,
    OperationsResearchAnalysis,
  } = vacancyData;
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
            <h4>{Surgeons.title}</h4>
            <p>{Surgeons.openPositions} Open Piositions</p>
          </div>
          <div className="vacancy_item">
            <h4>{Obstetricians_Gynecologists.title}</h4>
            <p>{Obstetricians_Gynecologists.openPositions} Open Piositions</p>
          </div>
          <div className="vacancy_item">
            <h4>{Orthodontists.title}</h4>
            <p>{Orthodontists.openPositions} Open Piositions</p>
          </div>
          <div className="vacancy_item">
            <h4>{MaxillofacialSurgeons.title}</h4>
            <p>{MaxillofacialSurgeons.openPositions} Open Piositions</p>
          </div>
          <div className="vacancy_item">
            <h4>{SoftwareDeveloper.title}</h4>
            <p>{SoftwareDeveloper.openPositions} Open Piositions</p>
          </div>
          <div className="vacancy_item">
            <h4>{Psychiatrists.title}</h4>
            <p>{Psychiatrists.openPositions} Open Piositions</p>
          </div>
          <div className="vacancy_item">
            <h4>{DataScientist.title}</h4>
            <p>{DataScientist.openPositions} Open Piositions</p>
          </div>
          <div className="vacancy_item">
            <h4>{FinancialManager.title}</h4>
            <p>{FinancialManager.openPositions} Open Piositions</p>
          </div>
          <div className="vacancy_item">
            <h4>{ManagementAnalysis.title}</h4>
            <p>{ManagementAnalysis.openPositions} Open Piositions</p>
          </div>
          <div className="vacancy_item">
            <h4>{ITManager.title}</h4>
            <p>{ITManager.openPositions} Open Piositions</p>
          </div>
          <div className="vacancy_item">
            <h4>{OperationsResearchAnalysis.title}</h4>
            <p>{OperationsResearchAnalysis.openPositions} Open Piositions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vacancies;
