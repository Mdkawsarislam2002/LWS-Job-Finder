// components
import AvailableJobs from "./AvailableJobs";
// import EditJobs from "./EditJobs";
// import AddNewJobs from "./AddNewJobs";

const Home = () => {
  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <AvailableJobs />
        {/* <EditJobs /> */}
        {/* <AddNewJobs /> */}
      </main>
    </div>
  );
};

export default Home;
