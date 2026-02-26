import React from "react";
function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero img"
          className="mb-5"
        ></img>
        <h1>Invest in everything</h1>
        <p>Online platform for invest in stocks derivatives for mutual funds</p>
        <button
          type="button"
          className="btn btn-primary btn-lg text-center fs-5"
          style={{ width: "20%", margin: "auto" }}
        >
          SignUp Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
