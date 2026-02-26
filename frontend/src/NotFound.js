import React from 'react'
function NotFound() {
    return ( 
         <>
      <div className="container p-5 mb-5">
        <div className="row text-center">
          
          <h1 className="fs-3 text-muted">404 Found</h1>
          <p style={{marginTop: "10px"}} className="text-muted">
          Please write the right route
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg text-center fs-5"
            style={{ width: "20%", margin: "auto" }}
          >
            Go Home
          </button>
        </div>
      </div>
    </>

     );
}

export default NotFound;