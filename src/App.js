import React from "react";
import "./App.css";
import profile from "./assets/robert.jpg";
import Header from "./components/Header";
import PostList from "./components/PostList";

const App = () => {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
};

export default App;
