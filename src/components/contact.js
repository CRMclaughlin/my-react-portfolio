import React from "react";


function ContactForm() {

    return (
        <div className="container pt-5">
            <div className="mb-3">
                <label className="form-label"></label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
            </div>
            <div className="mb-3">
                <label className="form-label"></label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email"/>
            </div>
            <div className="mb-3">
                <label className="form-label"></label>
                <textarea className="form-control" placeholder="Any inqueries please let me know!" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="text-center btn btn-outline-light btn-floating m-1">
            <i className="bi bi-envelope-paper-heart-fill"> Submit</i>
            </button>
        </div>
    )
}

export default ContactForm