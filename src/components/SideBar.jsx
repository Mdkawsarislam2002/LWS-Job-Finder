import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFilterType } from "../Redux/features/filtersAndSort/Filters";

const SideBar = () => {
  const dispatch = useDispatch();

  const handleFilterType = (type) => {
    console.log(type);
    dispatch(setFilterType(type));
  };

  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="main-menu menu-active"
              id="lws-alljobs-menu"
            >
              <i className="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </Link>
            <ul className="space-y-6 lg:space-y-2">
              <li>
                <p
                  onClick={() => {
                    handleFilterType("Internship");
                  }}
                  className="sub-menu cursor-pointer"
                  id="lws-internship-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                  Internship
                </p>
              </li>
              <li>
                <p
                  onClick={() => {
                    handleFilterType("Full Time");
                  }}
                  className="sub-menu cursor-pointer"
                  id="lws-fulltime-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                  Full Time
                </p>
              </li>
              <li>
                <p
                  onClick={() => {
                    handleFilterType("Remote");
                  }}
                  className="sub-menu cursor-pointer"
                  id="lws-remote-menu"
                >
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                  Remote
                </p>
              </li>
            </ul>
          </li>
          <li>
            <Link to={"add"} className="main-menu" id="lws-addJob-menu">
              <i className="fa-solid fa-file-circle-plus"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
