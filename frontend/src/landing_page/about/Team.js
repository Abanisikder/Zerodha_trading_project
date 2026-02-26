import React from "react";
function Team() {
  return (
    <>
      <div className="container mt-5 p-5">
        <div className="row mt-5 text-center text-muted fs-1 mb-5">
          <h1>People</h1>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              src="media/images/nithinKamath.jpg"
              style={{ borderRadius: "100%", width: "50%" }}
            />
            <h2 className="mt-5  text-muted">Nithin Kamath</h2>
            <h5 className="text-muted">Founder, CEO</h5>
          </div>
          <div className="col-6 p-5 " style={{lineHeight:"1.75rem"}}>
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                {" "}
                Homepage
              </a>
              /
              <a href="#" style={{ textDecoration: "none" }}>
                {" "}
                TradingQnA
              </a>
              /
              <a href="#" style={{ textDecoration: "none" }}>
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
