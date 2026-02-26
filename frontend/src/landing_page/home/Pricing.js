import React from "react";
function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-3">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See Pricing
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col-6 border p-2">
              <h1> &#8377;0</h1>
              <p>Free account opening</p>
            </div>
            <div className="col-6 border p-2">
              <h1> &#8377;20</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
