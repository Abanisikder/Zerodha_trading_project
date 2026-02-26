import React from "react";
// Add these imports at the top of your file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Example icon

// If you specifically need the dynamic "byPrefixAndName" helper:
import { byPrefixAndName } from "@fortawesome/fontawesome-svg-core";
function Hero() {
  return (
    <>
      <div className="container border-bottom">
        <div className="row text-center mt-5 p-5  ">
          <h1 className="fs-3 fw-3">Zerodha Products</h1>
          <h3 className="text-muted fs-5">
            Sleek, modern, and intuitive trading platforms
          </h3>
          <h5 className="mt-3 text-muted">
            Check out our{" "}
            <a href="" style={{textDecoration:"none"}}>
               investment offerings <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </h5>
        </div>
      </div>
    </>
  );
}

export default Hero;
