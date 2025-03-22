import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import EditContact from "./EditContact.jsx";

export const Home = () => {
	const apiUrl = "https://playground.4geeks.com/contact"
    const userAgenda = "Gvergara"
	const {store, dispatch} = useGlobalReducer()
	
	const navigate = useNavigate()

	useEffect(() =>{
		fetch((`${apiUrl}/agendas/${userAgenda}/contacts`))
		.then((response) => {
			if (!response.ok) {
				throw new Error("Error no hay contacto")
			}
			return response.json()
		})
		.then((data) => dispatch({type: "set_contacts", payload: data.contacts}))
		.catch(() => {})
	}, [])
	
	return (
		<div className="text-center mt-5">
			<Link to="add-contact">
				<button className="new-contact-btn">
					Add New Contact
				</button>
			</Link>
				<div className="mt-4">
					<h2>contactos</h2>
					{store.contacts && store.contacts.length > 0 ? (
						<ul>
							{store.contacts.map((contact) => (
								<li className="contact-list"
								key={contact.id}>
									{contact.name} <br />
									{contact.email} <br />
									{contact.phone} <br />
									{contact.address}
									<button className="edit-button"
									onClick={() =>
										navigate(`/edit-contact/${contact.id}`,{
											state:{contact},
										})
									}
									>
										Edit
									</button>
								</li>
							))}
						</ul>
					):(
						<p>No hay contactos</p>
					)}
					
					
					
				</div>	
		</div>
	);
}; 