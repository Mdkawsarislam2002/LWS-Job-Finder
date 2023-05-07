import { useDispatch, useSelector } from "react-redux";
import SingleJobs from "./SingleJobs";
import { useEffect } from "react";
import { fetchJobs } from "../Redux/features/Jobs/JobsApi";
import FilterAvailableJobs from "./FilterAvailableJobs";

const AvailableJobs = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state?.jobs);
  const { type, sortValue, searchValue } = useSelector(
    (state) => state.filtersValue
  );

  useEffect(() => {
    dispatch(
      fetchJobs({
        type: type,
        sortValue: sortValue,
        searchValue: searchValue,
      })
    );
  }, [dispatch, searchValue, sortValue, type]);

  return (
    <div>
      <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10">
        <h1 className="lws-section-title">All Available Jobs</h1>
        <FilterAvailableJobs />
      </div>

      {jobs?.map((data, index) => {
        return <SingleJobs key={index} data={data} />;
      })}
    </div>
  );
};

export default AvailableJobs;
