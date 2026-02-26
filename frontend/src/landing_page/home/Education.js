import React from "react";
function Education() {
  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/education.svg"
            alt="img"
            style={{ width: "75%" }}
          ></img>
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-3">Free and open market education</h1>
          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Varsity
          </a>
          <p text-muted>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            TradingQ&A{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
