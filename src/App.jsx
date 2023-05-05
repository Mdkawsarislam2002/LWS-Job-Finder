import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./Redux/store";
import { Provider } from "react-redux";

//  outlet  components
import Home from "./components/Home";
import Nav from "./components/Nav";

// child of home -  components
import AvailableJobs from "./components/AvailableJobs";
import EditJobs from "./components/EditJobs";
import AddNewJobs from "./components/AddNewJobs";

const App = () => {
  //  Routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          index: true,
          element: <AvailableJobs />,
        },
        {
          path: "/edit",
          element: <EditJobs />,
        },
        {
          path: "/add",
          element: <AddNewJobs />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <Nav />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
};

export default App;
