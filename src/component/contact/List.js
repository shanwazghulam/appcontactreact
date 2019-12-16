import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";
export default class List extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <>
              <h1 className="display-4 my-4">Nos contacts :</h1>
              {value.contact.map(contacts => (
                <Contact
                  key={contacts.id}
                  id={contacts.id}
                  nom={contacts.name}
                  mail={contacts.mail}
                  phone={contacts.phone}
                />
              ))}
            </>
          );
        }}
      </Consumer>
    );
  }
}
