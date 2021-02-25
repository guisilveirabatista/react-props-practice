import React from "react";
import "../../public/styles.css";
import Card from "./Card";
import contacts from "../contacts.js";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* {contacts.map((c) => {
        <Card name={c.name} img={c.imgURL} phone={c.phone} email={c.email} />;
      })} */}
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
