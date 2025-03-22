import React from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'
import { Navigate, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function EditContact() {
    const navigate = useNavigate()
    const {id} = useParams()
    const {store, dispatch} = useGlobalReducer()

    const identifId = store.contacts.find(contact => contact.id === parseInt(id))
    console.log(identifId)
    

  return (
    <div>
      edit
      <input type="text" />
      <button
      onClick={() => navigate("/")}
      >
        Cancel
      </button>
    </div>
  )
}

export default EditContact
