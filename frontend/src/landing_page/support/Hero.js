import React from "react";
function Hero() {
  return (
    <>
      <section className="container-fluid bg-primary text-white "style={{height:"400px"}} >
        <div className=" d-flex flex-row justify-content-between align-items-center p-5">
          <h3 className="fs-4">Support Portal</h3>{" "}
        
          <a href="#" className="text-decoration-none text-white">
            Track Tickets
          </a>
        </div>
        <div className="row ml-5 d-flex flex-row justify-content-evenly ">
            <div className="col-5  ">
                <h3>Search for an answer or browse helps topics to create a ticket</h3>
               <input 
  type="text"
  placeholder="Eg: how do i activate F&A, why is my order getting rejected"
  style={{
    background: "white",
    height: "55px",          
    width: "70%",            
    borderRadius: "4px",     
    border: "none",          
    padding: "0 20px",       
    fontSize: "18px",
    marginBottom:"10px"
   
  }}
/><br></br>
                <a href="#" className="text-white  p-2">Track account openning</a>
                 <a href="#"className="text-white  p-2">Track Segment activation</a>
                 <a href="#"className="text-white  p-2">Intraday</a><br></br>
                 <a href="#"className="text-white  p-2">margins</a>
                 <a href="#"className="text-white  p-2">Kite user manual</a>


            </div>
             <div className="col-4 ">
                <h3>Featured</h3>
                <div className=" d-flex flex-column justify-content-first align-items-first "style={{ minHeight: "100px" }}>
                    <a href="#"className="text-white m-2 ">1.Current Takeover and Delisting -January-2026</a>
                 <a href="#"className="text-white  m-2">2.Latest Intraday leverages - MIS & CO</a>
                </div>
             </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
