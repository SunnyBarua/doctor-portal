import React from 'react'
import chair from "../../images/chair.png"

const HeaderMain = () => {
    return (
        <main>
            <div className="row">
                <div className="col-md-4 offset-md-1 header-main-text">
                    <h1>Your New Smile <br/> Starts Here</h1>
                    <p className="text-secondary">Access support information, including educational articles and video tutorials on the Doctor Portal’s features. If you still need assistance, simply request support through our ticketing system. Our team will reach out to you shortly for assistance!</p>
                    <button className="btn btn-primary">GET APPOINTMENT</button>
                </div>
                <div className="col-md-6">
                  <img src={chair} alt="" className="img-fluid"/>
                </div>
                
            </div>
            
        </main>
    )
}

export default HeaderMain
