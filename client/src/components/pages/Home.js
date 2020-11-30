import React from "react";
import "../../App.css";
import Categories from "../Categories";
import FindPost from "../FindPost";
import HeroSection from "../HeroSection";
import Posts from "../Posts";

function Home(props) {
  return (
    <>
      <FindPost user={props.user} />
      <HeroSection />
      <Categories setEachPostId={props.setEachPostId} />
      <Posts setEachPostId={props.setEachPostId} />
    </>
  );
}

export default Home;
