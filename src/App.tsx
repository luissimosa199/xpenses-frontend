import React from "react";
import "./App.css";

// EXTERNAL LIBRARIES
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MotionComponent from "./components/containers/MotionComponent";
// COMPONENTS
import Header from "./components/Header/Header";
// VIEWS
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import { RequireAuth } from "./utils/RequireAuth";
import Home from "./views/Home/Home";
import AddNewBill from "./views/AddNewBill/AddNewBill";
import NotFound404 from "./views/NotFound404/NotFound404";
import Details from "./views/Details/Details";
import History from "./views/History/History";
import Family from "./views/Family/Family";
// import Details from "./views/Details/Details";
// import History from "./views/History/History";
// import NotFound404 from "./views/NotFound404/NotFound404";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />

      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/login"
            element={
              <MotionComponent>
                <Login />
              </MotionComponent>
            }
          />

          <Route
            path="/signup"
            element={
              <MotionComponent>
                <Signup />
              </MotionComponent>
            }
          />

          <Route
            path="/"
            element={
              <MotionComponent>
                <RequireAuth>
                  <Home />
                </RequireAuth>
              </MotionComponent>
            }
          />

          <Route
            path="/family"
            element={
              <MotionComponent>
                <RequireAuth>
                  <Family />
                </RequireAuth>
              </MotionComponent>
            }
          />

          <Route
            path="/addnewbill"
            element={
              <MotionComponent>
                <AddNewBill />
              </MotionComponent>
            }
          />

          <Route
            path="/details"
            element={
              <MotionComponent>
                <Details />
              </MotionComponent>
            }
          />

          <Route
            path="/history"
            element={
              <MotionComponent>
                <History />
              </MotionComponent>
            }
          />

          <Route
            path="*"
            element={
              <MotionComponent>
                <NotFound404 />
              </MotionComponent>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
