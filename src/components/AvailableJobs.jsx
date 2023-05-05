import { useDispatch, useSelector } from "react-redux";
import SingleJobs from "./SingleJobs";
import { useEffect } from "react";
import { fetchJobs } from "../Redux/Jobs/JobsApi";

const AvailableJobs = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state?.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div>
      <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10">
        <h1 className="lws-section-title">All Available Jobs</h1>
        <div className="flex gap-4">
          <div className="search-field group flex-1">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input
              type="text"
              placeholder="Search Job"
              className="search-input"
              id="lws-searchJob"
            />
          </div>
          <select
            id="lws-sort"
            name="sort"
            autoComplete="sort"
            className="flex-1"
          >
            <option>Default</option>
            <option>Salary (Low to High)</option>
            <option>Salary (High to Low)</option>
          </select>
        </div>
      </div>

      {jobs?.map((data, index) => {
        return <SingleJobs key={index} data={data} />;
      })}
    </div>
  );
};

export default AvailableJobs;
