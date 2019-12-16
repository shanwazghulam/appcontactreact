import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        contact: state.contact.filter(
          contacts => contacts.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        contact: [action.payload, ...state.contact]
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    contact: [
      {
        id: 1,
        name: "John Doe",
        mail: "john@gmail.com",
        phone: "555 - 555 - 5555"
      },
      {
        id: 2,
        name: "Mouloud Achour",
        mail: "mouloud@gmail.com",
        phone: "555 - 555 - 5555"
      },
      {
        id: 3,
        name: "Kristin Kurk",
        mail: "kristin@gmail.com",
        phone: "555 - 555 - 5555"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
