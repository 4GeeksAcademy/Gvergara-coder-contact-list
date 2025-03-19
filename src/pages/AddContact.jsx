import React from "react";
import { useNavigate } from "react-router-dom";

const Addcontact = () => {
    const navigate = useNavigate();
    return (
        <div className="container mt-5">
            <h1 className="header">
                Add a New Contact
            </h1>
            <label className="header-input">Full Name</label>
            <input className="input"
                type="text"
                placeholder="Full Name"
            />

            <label className="header-input">Email</label>
            <input className="input"
                type="text"
                placeholder="Enter Email"
            />

            <label className="header-input">Phone</label>
            <input className="input"
                type="text"
                placeholder="Enter Phone"
            />

            <label className="header-input">Address</label>
            <input className="input"
                type="text"
                placeholder="Enter Address"
            />

            <h3>
                <button className="save-button"
                    onClick={() => { navigate("/") }}>
                    Save
                </button>
            </h3>
            <a className="back-contacts"
            href="/">
                or get back to contacts
            </a>

        </div>
    )
}

export default Addcontact