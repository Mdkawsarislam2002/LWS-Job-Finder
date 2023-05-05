import store from "./Redux/store";
import { Provider } from "react-redux";

//  components
import Home from "./components/Home";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <Provider store={store}>
      {/* nav  */}
      <Nav />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
        {/* sidebar  */}
        <SideBar />
        <Home />
      </div>
    </Provider>
  );
};

export default App;
