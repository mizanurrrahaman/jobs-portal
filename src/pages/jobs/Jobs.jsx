import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./jobs.scss";

const url =
  "https://raw.githubusercontent.com/mizanurrrahaman/jobs-portal/main/src/data/jobs.json";

const Jobs = () => {
  let [jobs, setJobs] = useState([]);

  // fetch data
  useEffect(() => {
    const fetchJobs = async () => {
      let jobsData = await axios.get(url);
      setJobs(jobsData.data);
    };
    fetchJobs();
  }, []);

  console.log(jobs);
  return (
    <>
      <div className="jobs">
        <div className="container">
          <div className="jobs-wrapper">
            {jobs && jobs.length > 0 ? (
              jobs.map((job, index) => (
                <div key={index} className="job">
                  <h3 className="title"> {job.title} </h3>
                  <h4 className="job-status">{job.jobs} </h4>
                  <span> {job.Salary} </span>
                  <h5 className="thamel">{job.themal} </h5>
                  <div className="item">
                     <img className="img" src={job.image} alt="Not Found" />
                     <h6 className="location">{job.location}</h6>
                  </div> 
                </div>
              ))
            ) : (
              <h1>Loading..... </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
