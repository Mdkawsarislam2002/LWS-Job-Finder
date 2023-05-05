import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <SideBar />
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
