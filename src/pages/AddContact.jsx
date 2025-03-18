import React from "react";
import { useNavigate } from "react-router-dom";

export const Addcontact = () =>{
    const navigate = useNavigate
    return (
        <div className="container mt-5">
            <h3>
                <button className="btn btn-warning"
                onClick={() => {navigate("/")}}>
                    Add Contact
                </button>
            </h3>

        </div>
    )
}