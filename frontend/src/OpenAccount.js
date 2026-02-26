import React from "react";
function OpenAccount() {
  return (
    <>
      <div className="container p-5 mb-5">
        <div className="row text-center">
          
          <h1 className="fs-3 text-muted">Open a Zerodha account</h1>
          <p style={{marginTop: "10px"}} className="text-muted">
           Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg text-center fs-5"
            style={{ width: "20%", margin: "auto" }}
          >
            SignUp Now
          </button>
        </div>
      </div>
    </>
  );
}

export default OpenAccount;
