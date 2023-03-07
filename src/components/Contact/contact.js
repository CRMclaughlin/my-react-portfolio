import React from "react";
import './style.css'


function ContactForm() {

    return (
        <div className="container pt-5" id="contact">
            <div className="mb-3">
                <label className="form-label"></label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
            </div>
            <div className="mb-3">
                <label className="form-label"></label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
            </div>
            <div className="mb-3">
                <label className="form-label"></label>
                <textarea className="form-control" placeholder="Any inqueries please let me know!" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="text-center">
                <button className="btn btn-outline-light btn-floating m-1">
                    <i className="bi bi-envelope-paper-heart-fill"> Submit</i>
                </button>
            </div>
        </div>
    )
}

export default ContactForm