import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewJobs } from "../Redux/Jobs/JobsApi";
import { useNavigate } from "react-router-dom";

const AddNewJobs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobSalary, setJobSalary] = useState("");
  const [jobDeadline, setJobDeadline] = useState("");

  const FormHandler = (e, formType) => {
    switch (formType) {
      case "title":
        setJobTitle(e);
        break;

      case "salary":
        setJobSalary(e);
        break;

      case "jobsType":
        setJobType(e);
        break;

      case "deadline":
        setJobDeadline(e);
        break;

      default:
        break;
    }
  };

  const FormSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(
      addNewJobs({
        title: jobTitle,
        type: jobType,
        salary: jobSalary,
        deadline: jobDeadline,
      })
    );
    navigate("/");
  };

  return (
    <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>

      <div className="max-w-3xl mx-auto">
        <form className="space-y-6" onSubmit={FormSubmitHandler}>
          <div className="fieldContainer">
            <label
              htmlFor="lws-JobTitle"
              className="text-sm font-medium text-slate-300"
            >
              Job Title
            </label>
            <select
              id="lws-JobTitle"
              name="lwsJobTitle"
              required
              value={jobTitle}
              onChange={(e) => FormHandler(e.target.value, "title")}
            >
              <option hidden selected>
                Select Job
              </option>
              <option>Software Engineer</option>
              <option>Software Developer</option>
              <option>Full Stack Developer</option>
              <option>MERN Stack Developer</option>
              <option>DevOps Engineer</option>
              <option>QA Engineer</option>
              <option>Product Manager</option>
              <option>Social Media Manager</option>
              <option>Senior Executive</option>
              <option>Junior Executive</option>
              <option>Android App Developer</option>
              <option>IOS App Developer</option>
              <option>Frontend Developer</option>
              <option>Frontend Engineer</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobType">Job Type</label>
            <select
              id="lws-JobType"
              name="lwsJobType"
              required
              value={jobType}
              onChange={(e) => FormHandler(e.target.value, "jobsType")}
            >
              <option value="" hidden selected>
                Select Job Type
              </option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobSalary">Salary</label>
            <div className="flex border rounded-md shadow-sm border-slate-600">
              <span className="input-tag">BDT</span>
              <input
                value={jobSalary}
                onChange={(e) => FormHandler(e.target.value, "salary")}
                type="number"
                name="lwsJobSalary"
                id="lws-JobSalary"
                required
                className="!rounded-l-none !border-0"
                placeholder="20,00,000"
              />
            </div>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobDeadline">Deadline</label>
            <input
              value={jobDeadline}
              onChange={(e) => FormHandler(e.target.value, "deadline")}
              type="date"
              name="lwsJobDeadline"
              id="lws-JobDeadline"
              required
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              id="lws-submit"
              className="cursor-pointer btn btn-primary w-fit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddNewJobs;
