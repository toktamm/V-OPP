// import React from "react";
// import React, { useState, useEffect } from "react";

import "../App.css";
import "./HeroSection.css";
// import Axios from "axios";

function HeroSection() {
  // const [quotes, setQuotes] = useState([]);

  // Inspirational quotes API

  // useEffect(() => {
  //   Axios.get("https://type.fit/api/quotes").then((data) => {
  //     // console.log("This is from HeroSection.js data ------- ", data);
  //     setQuotes(data.data);
  //   });
  // }, []);

  return (
    <div className="hero-container">
      <h3>
        “No one is more cherished in this world than someone who lightens the
        burden of another.”
      </h3>
      {/* {quotes.map((key) => {
        return (
          <>
            <h3>"{key.text}"</h3>
            <h5>{key.author}</h5>
          </>
        );
      })} */}
      {/* <h5>author unknown</h5> */}
    </div>
  );
}

export default HeroSection;
