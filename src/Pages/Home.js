import React from "react";
import Header from "../Components/Header/Header";
import SearchTask from "../Components/Header/SearchTask";
import Tasks from "../Components/Tasks/Tasks";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchTask />
      <Tasks />
    </div>
  );
};

export default Home;
