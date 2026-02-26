import React from 'react'
function RightSEction({title,decsription,learmore,ImgUrl}) {
    return (
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-6 mt-5  p-5'>
                    <h3 className='text-muted'>{title}</h3>
                    <p className='mt-4'style={{lineHeight:"1.75rem"}}>{decsription}</p>
                    <a href={learmore} style={{textDecoration:"none"}}>Learn more</a>

                </div>
                {/* <div className='col-2 '></div> */}
                <div className='col-6 mb-5 p-5'>
                    <img src={ImgUrl} />

                </div>

            </div>

        </div>
      );
}

export default RightSEction;