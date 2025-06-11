import React from "react";
import Layout from "./layout";
import BackToTop from "./components/back-to-top";
import Hero from "./components/hero";
import About from "./components/about";
import Tours from "./components/tours";
import Contacts from "./components/contacts";
import TourDetails from "./components/tour-details"; // Make sure you use correct file here
import { Route, Routes } from "react-router-dom";
// import GTranslateWidget from "./components/lang";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BackToTop />
              <Hero />
              {/* <GTranslateWidget /> */}
              <Tours />
              <About />
              <Contacts />
            </>
          }
        />
        <Route path="/tour/:id" element={<TourDetails />} />
      </Routes>
    </Layout>
  );
};

export default App;
