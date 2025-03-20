import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
	const apiUrl = "https://playground.4geeks.com/contact"
	const userAgenda = "Gvergara"
	const [agenda, setAgenda] = useState([])

	function getAgenda() {
		fetch(`${apiUrl}/agendas/${userAgenda}/contacts`)
			.then(response => response.json())
			.then((data) => {
				setAgenda(data)
			})
			.catch((error) => console.error("Error creando la agenda", error))
	}

	useEffect(() => {
		getAgenda()
	}, []);

	return (
		<div className="text-center mt-5">
			<Link to="add-contact">
				<button className="new-contact-btn">
					Add New Contact
				</button>
			</Link>
				<div className="mt-4">
					<h2>contactos</h2>
					{agenda && agenda.length > 0 ? (
						<ul>
							{agenda.map ((contact, index) => (
								<li key={index}>{contact.full_name}</li>
							))}
						</ul>
					) : (
						<p>No hay contactos</p>
					)}
				</div>	
		</div>
	);
}; 