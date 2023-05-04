import React from "react";
import store from "./Redux/store";
import { Provider } from "react-redux";

//  components
import Home from "./components/Home";

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
