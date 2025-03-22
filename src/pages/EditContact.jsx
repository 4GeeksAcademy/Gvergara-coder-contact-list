import React, { useEffect, useState } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'
import { Navigate, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function EditContact() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { store, dispatch } = useGlobalReducer()
  const apiUrl = "https://playground.4geeks.com/contact"
  const userAgenda = "Gvergara"

  const identifId = store.contacts.find(contact => contact.id === parseInt(id))
  console.log(identifId)
  const [editContact, setEditContact] = useState(identifId)

  useEffect(() => {
    if (identifId) {
      setEditContact({ ...identifId })
    }
  }, [identifId])

  if (!identifId) {
    return console.log("contacto no encontrado")

  }
  const inputChange = (e) => {
    setEditContact({ ...editContact, [e.target.name]: e.target.value })
  }
  const updateContact = (e) => {
    e.preventDefault()
    fetch(`${apiUrl}/agendas/${userAgenda}/contacts/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editContact),
    })
    .then(response => {
      if(!response.ok) {
        throw new Error("Error actualizando")
      }
      return response.json()
    })
    .then(updatedContact => {
      dispatch({ type: "update_contact", payload: updatedContact })
      navigate("/")
    })
    .catch(error => {
      console.error("Error:", error)
      alert("Hubo un error actualizando el contacto")
    })
  }


  return (
    <>
      <form onSubmit={updateContact}>

        <div className="container mt-5">
          <h1 className="header">Edit Contact</h1>
          <label className="header-input">Full Name</label>
          <input
            label="name"
            className="input"
            type="text"
            name="name"
            placeholder="Full Name"
            value={editContact.name || ""}
            onChange={inputChange}
          />
          <label className="header-input">Email</label>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={inputChange}
            value={editContact.email || ""}
          />
          <label className="header-input">Phone</label>
          <input
            className="input"
            type="text"
            name="phone"
            placeholder="Enter Phone"
            value={editContact.phone || ""}
            onChange={inputChange}
          />
          <label className="header-input">Address</label>
          <input
            className="input"
            type="text"
            name="address"
            placeholder="Enter Address"
            onChange={inputChange}
            value={editContact.address || ""}
          />
          <button type='sumbit'
            className='save-button'>
            Save
          </button>
          <Link to="/">
            <button className='save-button'>
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </>
  )
}

export default EditContact
