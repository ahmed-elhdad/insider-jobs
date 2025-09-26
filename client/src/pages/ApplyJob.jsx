import React, { useContext, useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext.jsx";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import kConvert from "k-convert";
import moment from "moment";
import {
  LocationEditIcon,
  MonitorPlay,
  PersonStanding,
  SubscriptIcon,
} from "lucide-react";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer.jsx";
const ApplyJob = () => {
  const { id } = useParams();
  let [JobData, setJobData] = useState(0);
  const { jobs } = useContext(AppContext);
  const [filterdJobs, setFilterdJobs] = useState([]);
  const fetchJobs = async () => {
    const data = jobs.filter((job) => job._id === id);
    if (data.length !== 0) {
      setJobData(data[0]);
      console.log(JobData);
    }
  };
  const filterJobs = () => {
    const filterdJobs = jobs.filter(
      (job) => job._id !== JobData._id && job._id !== JobData._id
    );
    setFilterdJobs(filterdJobs);
  };
  useEffect(() => {
    if (jobs.length > 0) {
      fetchJobs();
      filterJobs();
    }
  }, [id, jobs]);
  return JobData ? (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col py-10 container px-4 3xl:px-20 mx-auto">
        <div className="bg-white text-black rounded-lg w-full">
          <div className="flex justify-center md:justify-between flex-wrap gap-8 py-20 mb-6 bg-sky-50 border border-sky-500 rounded-xl">
            <div className="px-10 flex flex-col md:flex-row items-center">
              <img
                className="h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border"
                src={JobData.companyID.image}
                alt=""
              />
              <div className="text-center md:text-left text-neutral-700">
                <h1 className="text-2xl sm:text-4xl font-medium">
                  {JobData.title}
                </h1>
                <div className="flex flex-row max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
                  <span className="flex items-center gap-1">
                    <SubscriptIcon />
                    {JobData.companyID.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <LocationEditIcon />
                    {JobData.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <PersonStanding />
                    {JobData.level}
                  </span>
                  <span className="flex items-center gap-1">
                    <MonitorPlay />
                    CTC: {kConvert.convertTo(JobData.salary)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center">
              <button className="bg-blue-600 p-2.5 px-10 text-white rounded">
                Apply Now
              </button>
              <p className="mt-1 text-gray-600">
                Posted: {moment(JobData.date).fromNow()}
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="rich-text w-full lg:w-2/3">
              <h2 className="font-bold text-2xl mb-4">Job Describtion:</h2>
              <div
                dangerouslySetInnerHTML={{ __html: JobData.descreption }}
              ></div>
              <butto className="bg-blue-600 p-2.5 px-10 text-white rounded mt-1">
                Apply Now
              </butto>
            </div>
            {/* Right section */}
            <div className="w-full lg:w-1/3 mt-8 lg:ml-8 space-y-5">
              <h2 className="">More jobs from {JobData.companyID.name}</h2>
              {filterdJobs.map((job, index) => (
                <JobCard job={job} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <div className="flex min-h-screen items-center justify-center">
      <Loading />
    </div>
  );
};

export default ApplyJob;
