import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";
export default class AddContact extends Component {
  state = {
    name: "",
    mail: "",
    phone: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const newContact = {
      id: uuid(),
      name: this.state.name,
      mail: this.state.mail,
      phone: this.state.phone
    };
    dispatch({ type: "ADD_CONTACT", payload: newContact });

    this.setState({
      name: "",
      mail: "",
      phone: ""
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card mb-3">
              <div className="card-header">Ajouter contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Entrez un nom ..."
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mail">Email</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Entrez un email ..."
                      name="mail"
                      value={this.state.mail}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Entrez un numéro de téléphone ..."
                      name="phone"
                      value={this.state.phone}
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Ajouter un Contact"
                    className="btn btn-block btn-primary"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
