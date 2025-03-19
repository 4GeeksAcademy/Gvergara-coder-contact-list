import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
	const apiUrl = "https://playground.4geeks.com/contact"
	const userAgenda = "Gvergara"
	const [agenda, setAgenda] = useState("")

	function createAgenda() {
		fetch(`${apiUrl}/agendas/${userAgenda}`, { method: "POST" })
			.then(response => {
				console.log("se creo la agenda");
				return response.json()
			})
			.then(data => console.log(data))
	}

	function getAgenda() {
		fetch(`${apiUrl}/agendas/${userAgenda}/contacts`)
			.then(response => {
				if (!response.ok) {
					if (response.status == 404) {
						createAgenda()
					}
					console.log("No se pudo obtener la agenda")
				}
				return response.json()
			})
	}

	useEffect(() => {
		getAgenda()
	}, [])
	return (
		<div className="text-center mt-5">
			<Link to="add-contact">
				<button className="new-contact-btn">
					Add New Contact
				</button>
			</Link>
			<form>
				<input
				type="Text"
				>
				</input>
			</form>		
		</div>
	);
}; 