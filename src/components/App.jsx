import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact){
  return (  
  <Card
  name={contact.name}
  img={contact.imgURL}
  tel={contact.phone}
  email={contact.email}
  />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar 
      img="https://media.licdn.com/dms/image/D4D03AQHfDWpDA9S4-g/profile-displayphoto-shrink_400_400/0/1664658531608?e=1680739200&v=beta&t=qmQC6cAtP9XPizEI_9VOp8NfNU4Jm0Tgx4GisjZzD8U" 
      />

        {contacts.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
