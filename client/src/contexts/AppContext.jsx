"use client";

import { createContext, useEffect } from "react";
import { useState } from "react";
import { jobsData } from "../assets/asstes";
export const AppContext = createContext();
export const AppContextProvider = (props) => {
  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });
  const [jobs, setJobs] = useState([]);
  // Function to fetch jobs data
  const fetchJobs = async () => {
    setJobs(jobsData);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  const [isSearched, setIsSearched] = useState(false);
  const value = {
    setSearchFilter,
    searchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs,
    showRecruiterLogin,
    setShowRecruiterLogin,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
