import React from 'react'
function Awards() {
    return ( 
        <div className='container'>
            <div className='row mb-5'>
                <div className='col-6'>
                    <img src="media/images/largestBroker.svg" alt="img"></img>
                </div>
                <div className='col-6 mt-5'>
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mt-3'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <div className='row mt-5'>
                        <div className='col-6 '>
                            <ul>
                                <li><p>Future of Options</p></li>
                                 <li><p>Currency derivatives</p></li>
                                  <li><p>Commodity derivatives</p></li>
                                

                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>Stocks &#x26; IPOS</p></li>
                                 <li><p>Direct mutual funds</p></li>
                                  <li><p>Bonds and Government security</p></li>
                            </ul>
                        </div>
                        <img src="media/images/pressLogos.png" alt="img" style={{width: "90%"}}></img>
                    </div>
                </div>

            </div>

        </div>
     );
}

export default Awards;