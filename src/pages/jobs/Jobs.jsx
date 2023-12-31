import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./jobs.scss";
import { BsGoogle } from "react-icons/bs";
import Image from "../../components/image/image";


const url ="https://raw.githubusercontent.com/mizanurrrahaman/jobs-portal/main/src/data/jobs.json";

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
              <h3 className="title">title: {job.title} </h3>
              <h4 className="job-status">Jobes: {job.jobs} </h4>
              <span> Salary:{job.Salary} </span>
              <h5 className="thamel">themal: {job.themal} </h5>
               <Image src={job.image}/>
              <h6 className="location"> location : {job.location}</h6>
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
