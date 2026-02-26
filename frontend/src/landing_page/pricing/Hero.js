import React from "react";
function Hero() {
  return (
    <>
      <div className="container">
        <div className="row text-center mt-1 p-5 ">
          <h1 style={{ fontWeight: "initial" }}>Charges</h1>
          <h4 className="text-muted fs-5  mt-2">
            List of all charges and taxes
          </h4>
        </div>
        <div className="row mt-5 ">
          <div className="col-4 p-5">
            <img src="media/images/pricing0.svg" />
            <h1 className="fs-3">Free equity delivery</h1>
            <p className="text-muted">
              All equity delivery investments (NSE, BSE),<br></br> are
              absolutely free — ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-5 ">
            <img src="media/images/other-trades.svg" />
            <h1 className="fs-3">Intraday and F&O trades</h1>
            <p className="text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-5 ">
            <img src="media/images/pricingMF.svg" />
            <h1 className="fs-3">Free direct MF</h1>
            <p className="text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
            </p>

          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
