import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { editExistingJobs } from "../Redux/features/Jobs/JobsApi";
import { useDispatch } from "react-redux";

const EditJobs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = location.state;
  const [userTitle, setUserTitle] = useState(data?.title);
  const [JobType, setJobType] = useState(data?.type);
  const [Salary, setSalary] = useState(data?.salary);
  const [Deadline, setDeadline] = useState(data.deadline);

  const FormHandler = (e, formType) => {
    switch (formType) {
      case "title":
        setUserTitle(e);
        break;

      case "salary":
        setSalary(e);
        break;

      case "jobsType":
        setJobType(e);
        break;

      case "deadline":
        setDeadline(e);
        break;

      default:
        break;
    }
  };

  const FormSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      editExistingJobs({
        title: userTitle,
        type: JobType,
        salary: Salary,
        deadline: Deadline,
        id: data.id,
      })
    );
    navigate("/");
  };

  // deadline
  // id
  // salary
  // title
  // type
  return (
    <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

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
              onChange={(e) => FormHandler(e.target.value, "title")}
              value={userTitle}
            >
              <option value="" hidden selected>
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
              value={JobType}
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
                value={Salary}
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
              value={Deadline}
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
              Edit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditJobs;
