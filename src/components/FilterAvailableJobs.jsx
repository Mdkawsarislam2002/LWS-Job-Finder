import { useDispatch } from "react-redux";
import {
  setSortValue,
  setSearchValue,
} from "../Redux/features/filtersAndSort/Filters";

const FilterAvailableJobs = () => {
  const dispatch = useDispatch();

  const filterJobs = (e, type) => {
    switch (type) {
      case "searchValue":
        dispatch(setSearchValue(e));

        break;
      case "select":
        if (e === "Salary (Low to High)") {
          dispatch(setSortValue("asc"));
          break;
        } else if (e === "Salary (High to Low)") {
          dispatch(setSortValue("desc"));
          break;
        } else {
          console.log("default");
          break;
        }

      default:
        break;
    }
  };
  return (
    <>
      <div className="flex gap-4">
        <div className="search-field group flex-1">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            onChange={(e) => filterJobs(e.target.value, "searchValue")}
            type="text"
            placeholder="Search Job"
            className="search-input"
            id="lws-searchJob"
          />
        </div>
        <select
          onChange={(e) => filterJobs(e.target.value, "select")}
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
    </>
  );
};

export default FilterAvailableJobs;
