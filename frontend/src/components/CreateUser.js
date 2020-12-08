import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class CreateUser extends Component {
  state = {
    users: [],
    userName: "",
    correo: "",
  };

  async componentDidMount() {
    this.getUsers();
    console.log(this.state.users.data);
  }

  getUsers = async () => {
    const res = axios.get("http://localhost:4000/api/users");
    this.setState({ users: (await res).data });
  };

  onCargarUsuario = async (e) => {
    e.preventDefault();
    const newUser = {
      userName: this.state.userName,
      correo: this.state.correo,
    };
    await axios.post("http://localhost:4000/api/users", newUser);
    this.setState({ userName: "", correo: "" });
    this.getUsers();
    //console.log(this.state.userName,this.state.correo);
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    console.log(e.target.name, e.target.value);
    console.log(this.state.userName, this.state.correo);
  };
  eliminarUsuario = (id) => {
    axios.delete("http://localhost:4000/api/users/" + id);

    this.getUsers();
  };
  render() {
    return (
      <div className=" row ml-5">
        <div className="col-md-5 ">
          <form onSubmit={this.onCargarUsuario}>
            <div className="form-row col-auto my-5">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="userName"
                  value={this.state.userName}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Correo"
                  name="correo"
                  value={this.state.correo}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="col-auto my-5">
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>

              <Link className="btn btn-primary m-4" to="/">
                Volver
              </Link>
            </div>
          </form>
        </div>

        <div className="col-md-5  ">
          {this.state.users.length  === 0 ? <p> </p>: <h1>usuarios</h1>}
          
          <table class="table">
            <thead></thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user._id}>
                  <th scope="row">{user.userName}</th>
                  <td>{user.correo}</td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-primary "
                      onClick={() => this.eliminarUsuario(user._id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
