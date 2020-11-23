import React, { useState } from "react";
import "../../App.css";
import FindPost from "../FindPost";
import HeroSection from "../HeroSection";
import Posts from "../Posts";

const initialPostData = [
  {
    src: "images/img-9.jpg",
    title: "Earth Day Community Clean-Ups",
    text:
      "On Earth Day join hundreds of high school students to clean Toronto together! Choose a location that works best for you and sign-up with your friends.On Earth Day join hundreds of high school students to clean Toronto together! Choose a location that works best for you and sign-up with your friends.",
  },
  {
    src: "images/img-4.jpg",
    title: "Wildlife Care",
    text:
      "Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea ",
  },
  {
    src: "images/img-8.jpg",
    title: "Volunteer Mentor",
    text:
      "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip. Sea lettuce lettuce water.",
  },
];

function Home() {
  const [postData, setPostData] = useState(initialPostData);

  const addNewPost = (text) => {
    const newPost = {
      src: "images/img-9.jpg",
      title: "Earth Day Community Clean-Ups",
      text: "",
    };

    setPostData([newPost, ...postData]);
  };
  return (
    <>
      <FindPost />
      <HeroSection />
      <Posts postData={postData} />
    </>
  );
}

export default Home;
