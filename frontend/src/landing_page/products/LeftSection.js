import React from "react";
function LeftSection({
  ImgUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container  mb-5">
        <div className="row">
          <div className="col-5 mt-5 p-5 ">
            <img src={ImgUrl} />
          </div>
          <div className="col-2"></div>
          <div className="col-5 mt-5 p-5">
            <h3>{productName}</h3>
            <p className="mt-3" style={{lineHeight:"1.5rem"}}>{productDescription}</p>
            <div className="mt-3 p-1">
              <a href={tryDemo} style={{textDecoration:"none"}} className="ml-3">try Demo</a>
              <a href={learnMore} className="m-5" style={{textDecoration:"none"}}>Learn more</a>
            </div>
            <div className="mt-3 p-1">
              <a href={googlePlay} className="m-3">
                <img src="media/images/googlePlayBadge.svg" />
              </a>
              <a href={appStore}>
                <img src="media/images/appstoreBadge.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
