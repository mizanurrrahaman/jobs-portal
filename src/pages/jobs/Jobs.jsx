import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./jobs.scss";
import { IoSearch } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { TbAdjustmentsSearch } from "react-icons/tb";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


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
          <div className="find-job">
             <h5>Find Job</h5>
             <h5>Home/Find job</h5>
          </div>
           <div className="search">
              <div className="search-wrapper">
                <div className="icon">
                 <span> <IoSearch className="i"/> Search by: Job tittle, Position, Keyword...</span>
                </div>
                 <div className="icon">
                 <span><MdLocationPin className="i"/> City, state or zip code</span>
                 </div>
                 <div className="btn-item">
                   <button className="btn"> <TbAdjustmentsSearch /> Filters</button>
                   <button className="btn">Find Job</button>
                 </div>
              </div>
           </div>
          <div className="jobs-wrapper">
            {jobs && jobs.length > 0 ? (
              jobs.map((job, index) => (
                <div key={index} className="job">
                  <h3 className="title"> {job.title} </h3>
                      <div className="job-item">
                         <h4 className="job-status">{job.jobs} </h4>
                         <span> {job.Salary} </span>
                      </div>
                  <div className="item">
                     <img className="img" src={job.image} alt="Not Found" />
                    <div>
                     <h5 className="thamel">{job.themal} </h5>
                     <h6 className="location">{job.location}</h6>
                    </div>  
                  </div> 
                </div>
              ))
            ) : (
              <h1>Loading..... </h1>
            )}
          </div>
           <div className="number">
              <div className="number-item">
                  <span className="ic"> <FaArrowLeft /> </span>
                    <span className="ic">01 </span>
                    <span className="ic">02</span>
                    <span className="ic">03</span>
                    <span className="ic">04</span>
                    <span className="ic">05</span>
                   <span className="ic"> <FaArrowRight /> </span> 
              </div>
           </div>
        </div>
       </div>
    </>
  );
};

export default Jobs;
