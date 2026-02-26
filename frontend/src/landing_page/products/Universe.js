import React from "react";
function Universe() {
  return (
    <>
      <div className="container mt-5">
        <div className="row text-center">
          <p className="fs-5">
            {" "}
            Want to know more about our technology stack? Check out the{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Zerodha.tech
            </a>{" "}
            blog.
          </p>
        </div>
        <div className="row text-center mt-5">
          <h3 className="text-muted">The Zerodha Universe</h3>
          <p className="mt-3">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="row">
          <div className="col-4 mt-5 p-3">
            <img src="media/images/img1.png" style={{ width: "40%" }} />
            <p className="text-muted text-small mt-3 p-3 ">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 mt-5 p-3">
            <img src="media/images/sensibullLogo.svg" />
            <p className="text-muted text-small  mt-3 p-3">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 mt-5 p-3">
            <img src="media/images/tijori.svg" style={{ width: "40%" }} />
            <p className="text-muted text-small  mt-3 p-3">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 mt-5 p-3">
            <img src="media/images/streak-logo.png" style={{ width: "40%" }} />
            <p className="text-muted text-small  mt-3 p-3">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 mt-5 p-3">
            <img
              src="media/images/smallcase-logo.png"
              style={{ width: "40%" }}
            />
            <p className="text-muted text-small mt-3 p-3">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 mt-5 p-3">
            <img src="media/images/ditto-logo.png" style={{ width: "40%" }} />
            <p className="text-muted text-small mt-3 p-3">
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
        </div>
        <div className="row text-center">
          <form>
            <button type="submit" className="btn btn-primary btn-lg mt-5">
              Sign up for free
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Universe;
