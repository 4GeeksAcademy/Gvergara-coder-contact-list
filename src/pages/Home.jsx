import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

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
				return response.json
			})
	}

	useEffect(() => {
		getAgenda()
	}, [])
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<link to="/add-contact">
				<button className="btn btn-success">
					Add Contact
				</button>
			</link>
		</div>
	);
}; 