import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../Redux/Jobs/JobsApi";

const Home = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobs);

  console.log(jobs);
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return <div>Home</div>;
};

export default Home;
