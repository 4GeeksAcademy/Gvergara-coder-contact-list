import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addcontact = () => {
    const apiUrl = "https://playground.4geeks.com/contact";
    const userAgenda = "Gvergara";
    const [contact, setContact] = useState({
        name: "",
        email: "",
        address: "",
        phone: ""
    });
    const navigate = useNavigate();

    const agendaCambio = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    };

    const enterAgenda = (e) => {
        e.preventDefault();

        fetch(`${apiUrl}/agendas/${userAgenda}/contacts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact)
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error guardando contacto");
            }
            return response.json();
        })
        .then(() => { 
            navigate("/");
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };

    return (
        <div className="container mt-5">
            <h1 className="header">
                Add a New Contact
            </h1>
            <form onSubmit={enterAgenda}>
                <div>
                    <label className="header-input">Full Name</label>
                    <input
                        label="fullname"
                        className="input"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={agendaCambio}
                        value={contact.name}
                    />
                </div>
                <label className="header-input">Email</label>
                <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    onChange={agendaCambio}
                    value={contact.email}
                />

                <label className="header-input">Phone</label>
                <input
                    className="input"
                    type="text"
                    name="phone"
                    placeholder="Enter Phone"
                    value={contact.phone}
                    onChange={agendaCambio}
                />

                <label className="header-input">Address</label>
                <input
                    className="input"
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                    onChange={agendaCambio}
                    value={contact.address}
                />

                <h3>
                    <button
                        type="submit"
                        className="save-button"
                    >
                        Save
                    </button>
                </h3>
                <a className="back-contacts" href="/">
                    or get back to contacts
                </a>
            </form>
        </div>
    );
};

export default Addcontact;