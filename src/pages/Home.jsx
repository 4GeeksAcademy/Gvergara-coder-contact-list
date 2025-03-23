import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import EditContact from "./EditContact.jsx";

export const Home = () => {
	const apiUrl = "https://playground.4geeks.com/contact"
	const userAgenda = "Gvergara"
	const { store, dispatch } = useGlobalReducer()

	const navigate = useNavigate()

	useEffect(() => {
		fetch((`${apiUrl}/agendas/${userAgenda}/contacts`))
			.then((response) => {
				if (!response.ok) {
					throw new Error("Error no hay contacto")
				}
				return response.json()
			})
			.then((data) => dispatch({ type: "set_contacts", payload: data.contacts }))
			.catch(() => {})
	}, [])
	const contactDelete = (id) => {
		fetch(`${apiUrl}/agendas/${userAgenda}/contacts/${id}`, { method: "DELETE" })
			.then((response) => {
				if (!response.ok) {
					throw new Error("Error eliminando")
				}
				dispatch({ type: "delete_contact", payload: id });
			})
			.catch(error => console.error("Error eliminando el contacto", error));
			
	}

	return (
		<div className="text-center mt-5">
			<Link to="add-contact">
				<button className="new-contact-btn">
					Add New Contact
				</button>
			</Link>
			<div className="mt-4 container">
				<h2>Contactos</h2>
				<div className="contact-list container">
					<div className="lista">
						{store.contacts && store.contacts.length > 0 ? (
							<ul>
								{store.contacts.map((contact) => (
									<span key={contact.id}>
										<div className="container contacto text-start">
											<img className="profile-pic" src="data:image/jpeg;base64,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" alt="" />
											<div className="container mt-1 datos">
												<h4>
													{contact.name}
												</h4>
												<div className="list container iconos">
													<div className="font">
														<i className="fa-regular fa-envelope" /> <br />
														<i className="fa-solid fa-phone" /><br />
														<i className="fa-solid fa-map-pin" /><br />
													</div>
												</div>
												<div className="container datos2">
													{contact.email} <br />
													{contact.phone} <br />
													{contact.address}
												</div>
											</div>
											<button className="edit-button"
												onClick={() =>
													navigate(`/edit-contact/${contact.id}`, {
														state: { contact },
													})
												}><i className="fa-solid fa-pencil"></i>
											</button>
											<button className="delete-button"
												onClick={() =>
													contactDelete(contact.id)}>
												<i className="fa-solid fa-trash"></i>
												</button>
										</div>
									</span>
								))}
							</ul>
						) : (
							<p>No hay contactos</p>
						)}
					</div>

				</div>
			</div>
		</div>
	);
}; 