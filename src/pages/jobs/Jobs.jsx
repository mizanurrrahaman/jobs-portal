import React from "react";
import "./jobs.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const url =
  "https://raw.githubusercontent.com/mizanurrrahaman/jobs-portal/main/src/data/jobs.json";

const Jobs = () => {
  let [jobs, setJobs] = useState();
  useEffect(() => {
    async () => {
      const jobsData = await axios.get(url);
      setJobs(jobsData.data);
    };
    console.log(jobsData)
  }, []);
  console.log(jobs);

  return (
    <>
      <div className="jobs">
        {user && user.length > 0 ? (
          user.map((item, index) => (
            <div key={index} className="item">
              <h3>title: {item.title} </h3>
              <h4>Jobes: {item.jobs} </h4>
              <span> Salary:{item.Salary} </span>
              <h5>themal: {item.themal} </h5>
              <h6> location : {item.location}</h6>
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
