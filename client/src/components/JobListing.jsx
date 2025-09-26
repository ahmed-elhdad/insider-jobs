import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext.jsx";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { jobCategories, jobsLocations } from "../assets/asstes.js";
import JobCard from "./JobCard.jsx";
const JobListing = () => {
  const { isSearched, jobs, setSearchFilter, searchFilter } =
    useContext(AppContext);
  const [showFilter, setShowFilter] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocaions, setselectedLocaions] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  // Handle Category Change:
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };
  // Handle Location Change:

  const handleLocationChange = (location) => {
    setselectedLocaions((prev) =>
      prev.includes(location)
        ? prev.filter((c) => c !== location)
        : [...prev, location]
    );
  };
  useEffect(() => {
    const matchedLocation = (job) =>
      selectedLocaions.length === 0 ||
      selectedCategories.includes(job.location);

    const matchedCategory = (job) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(job.category);
    const matchesTitle = (job) =>
      searchFilter.title === "" ||
      job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
    const matchesSearchLocations = (job) =>
      searchFilter.location !== "" ||
      job.location.toLowerCase().includes(searchFilter.location.toLowerCase());
    const newFilteredJobs = jobs
      .slice()
      .reverse()
      .filter(
        (job) =>
          matchedCategory(job) &&
          matchedLocation(job) &&
          matchesTitle(job) &&
          matchesSearchLocations(job)
      );
    setFilteredJobs(newFilteredJobs);
    setCurrentPage(1);
  }, [jobs, selectedCategories, selectedLocaions, searchFilter]);
  return (
    <div className="container gap-8 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* Side bar */}
      <div className="side-bar flex flex-col gap-3 ml-2">
        <div className="w-full lg:w-1/4 flex-col bg-white px-4">
          {/* Searhc fileter from hero component */}
          {isSearched &&
            (searchFilter.title !== "" || searchFilter.location !== "") && (
              <>
                <h3 className="font-medium text-lg mb-4">Current Jobs</h3>
                <div className="mb-4 text-gray-600">
                  {searchFilter.title && (
                    <span className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
                      {searchFilter.title}
                      <X
                        className="cursor-pointer"
                        onClick={(e) =>
                          setSearchFilter((prev) => ({ ...prev, title: "" }))
                        }
                      />
                    </span>
                  )}

                  {searchFilter.location && (
                    <span className="ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded">
                      {searchFilter.location}
                      <X
                        className="cursor-pointer"
                        onClick={(e) =>
                          setSearchFilter((prev) => ({ ...prev, location: "" }))
                        }
                      />
                    </span>
                  )}
                </div>
              </>
            )}
        </div>
        <button
          onClick={(e) => setShowFilter((prev) => !prev)}
          className="px-6 w-32 py-1.5 rounded border border-gray-400 lg:hidden"
        >
          {showFilter ? "close" : "open"} filter
        </button>
        {/* Category Filter*/}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4  ">Search by Categories</h4>
          <ul className="space-y-4 text-gray-600 ">
            {jobCategories.map((category, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input
                  onChange={() => {
                    handleCategoryChange(category);
                  }}
                  checked={selectedCategories.includes(category)}
                  className="scale-2"
                  type="checkbox"
                />
                {category}
              </li>
            ))}
          </ul>
        </div>
        {/* Location Search */}

        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4 pt-14 ">
            Search by Location
          </h4>
          <ul className="space-y-4 text-gray-600 ">
            {jobsLocations.map((location, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input
                  onChange={() => {
                    handleLocationChange(location);
                  }}
                  checked={selectedLocaions.includes(location)}
                  className="scale-2"
                  type="checkbox"
                />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Jopb listing */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-medium text-3xl py-2" id="job-list">
          lates jobs
        </h3>
        <p className="mb-8">Get your desired job from top companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredJobs
            .slice((currentPage - 1) * 6, currentPage * 6)
            .map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
        </div>
        {/* Pagination */}
        {filteredJobs.length > 0 && (
          <div className="flex items-center justify-center space-x-2 mt-10">
            <a
              onClick={() => {
                setCurrentPage(
                  Math.max(currentPage - 1, Math.ceil(jobs.legnth / 6))
                );
              }}
              href="#job-list"
            >
              <ArrowLeft />
            </a>
            {Array.from({
              length: Math.ceil(filteredJobs.length / 6),
            }).map((_, idex) => (
              <a key={idex} href="#job-list">
                <button
                  onClick={() => {
                    setCurrentPage(idex + 1);
                  }}
                  className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${
                    currentPage == idex + 1
                      ? "bg-blue-100 text-blue-500"
                      : "text-gray-500"
                  }`}
                >
                  {idex + 1}
                </button>
              </a>
            ))}
            <a
              onClick={() => {
                setCurrentPage(
                  Math.min(currentPage + 1, Math.ceil(filteredJobs.legnth / 6))
                );
              }}
              href="#job-list"
            >
              <ArrowRight />
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default JobListing;
