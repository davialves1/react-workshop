import React from "react";
import DockComponent from "./DockComponent";
import {useParams} from "react-router-dom";

const Home = () => {

  let {tabCount} = useParams();

  return (
    <>
      <DockComponent tabCount={tabCount} />
    </>
  );
};

export default Home;
