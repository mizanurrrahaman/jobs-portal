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
        {jobs && jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div key={index} className="job">
              <h3>title: {job.title} </h3>
              <h4>Jobes: {job.jobs} </h4>
              <span> Salary:{job.Salary} </span>
              <h5>themal: {job.themal} </h5>
              <h6> location : {job.location}</h6>
            </div>
          ))
        ) : (
          <h1>Loading..... </h1>
        )}
      </div>
    </>
  );
};

export default Jobs;
