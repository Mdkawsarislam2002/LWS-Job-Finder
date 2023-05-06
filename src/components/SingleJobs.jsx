import { useDispatch } from "react-redux";
import { deleteJObs } from "../Redux/Jobs/JobsApi";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleJobs = ({ data }) => {
  const dispatch = useDispatch();
  const { title, type, salary, deadline, id } = data;

  const deleteJobs = () => {
    dispatch(deleteJObs(id));
  };
  let jobTypeColor;
  if (type == "Fulltime") {
    jobTypeColor = "#FF8A00";
  } else if (type == "Internship") {
    jobTypeColor = "#FF5757";
  } else {
    jobTypeColor = "#56E5C4";
  }

  return (
    <div className="jobs-list">
      <div className="lws-single-job">
        <div className="flex-1 min-w-0">
          <h2 className="lws-title">{title}</h2>
          <div className="job-footers">
            <div className="lws-type">
              {/* Fulltime - #FF8A00,  */}
              {/* Internship - #FF5757,  */}
              {/* Remote - #56E5C4,  */}
              <i
                className={`fa-solid fa-stop !text-[${jobTypeColor}] text-lg mr-1.5`}
              ></i>
              {type}
            </div>
            <div className="lws-salary">
              <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
              BDT {salary}
            </div>
            <div className="lws-deadline">
              <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
              Closing on {deadline}
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <Link
              to={"edit"}
              state={{ data }}
              type="button"
              className="lws-edit btn btn-primary"
            >
              <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
              Edit
            </Link>
          </span>

          <span className="sm:ml-3">
            <button
              type="button"
              className="lws-delete btn btn-danger"
              onClick={deleteJobs}
            >
              <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
              Delete
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleJobs;
