import { useState, useEffect } from "react";
import ModalRobot from "./Modal";

const ContactFunction = (props) => {
  const [contact, setContact] = useState([]);
  const [contactTempo, setContactTempo] = useState(contact);
  const [chargement, setChargement] = useState(true);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContact(data);
        setContactTempo(data);
        setChargement(false);
      });
  }, []);
  function inputChanged(e) {
    let inputValue = e.target.value.toUpperCase();

    const contactTempoFilter = contact.filter((Element) => {
      return Element.name.toUpperCase().includes(inputValue);
    });
    setContactTempo(contactTempoFilter);
  }
  function renderContacts(tableau) {
    return tableau.map(function (contact) {
      return (
        <ModalRobot {...contact}/>
      );
    });
  }
  if(chargement){
    return (
      <div className="div--chargement">
        <h2 className="class-chargement">Chargement ...</h2>
      </div>
    )
  }
  return (
    <div>
      <header>
        <input
          type="search"
          placeholder="Rechercher par nom"
          onChange={inputChanged}
        />
      </header>
      <div className="container--card">{renderContacts(contactTempo)}</div>
    </div>
  );
};
export default ContactFunction;