import "../../App.css";
import FindPost from "../FindPost";
import HeroSection from "../HeroSection";
import Posts from "../Posts";

function Home() {
  return (
    <>
      <HeroSection />
      <FindPost />
      <Posts />
    </>
  );
}

export default Home;
