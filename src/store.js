export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    contacts: [

    ]

  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case "set_contacts":
      const listContact = action.payload
      return {
        ...store,
        contacts: listContact
      }
      case "update_contact":
        const updatedContact = action.payload;
        const updatedContacts = store.contacts.map(contact => {
            if (contact.id === updatedContact.id) {
                return updatedContact;
            }
            return contact;
        })
        return {
            ...store,
            contacts: updatedContacts
        }
        case "delete_contact":
          const contactId = action.payload;
          return {
            ...store,
            contacts: store.contacts.filter(contact => contact.id !== contactId)
          }
    
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
