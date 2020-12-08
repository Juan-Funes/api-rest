import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default class CreateNotes extends Component {
  state = {
    title: "",
    content: "",
    author: "",
    editado: false,
    _id: ""
  };
  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/api/notes/'+this.props.match.params.id);

    if (this.props.match.params.id) {
      this.setState({
        title: res.data.title,
        content: res.data.content,
        author: res.data.author,
        editado: true,
        _id: this.props.match.params.id,
      });
    }
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author,
    };
    if (this.state.editado) {
      await axios.put(
        "http://localhost:4000/api/notes/" + this.state._id,
        newNote
      );
      alert('La nota ha sido modificada con exito')
    } else {
      await axios.post("http://localhost:4000/api/notes", newNote);
      alert("Nota Guardada");
    }

    window.location.href = "/";
    //console.log(this.state.title, this.state.content , this.state.author)
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    //console.log(e.target.name, e.target.value)
  };

  render() {
    return (
      <div className="container">
        <div className="col-md-8">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                name="title"
                onChange={this.onInputChange}
                placeholder="Titulo"
                value={this.state.title}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                name="content"
                onChange={this.onInputChange}
                placeholder="Contenido"
                value={this.state.content}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                name="author"
                onChange={this.onInputChange}
                placeholder="Autor"
                value={this.state.author}
                required
              />
            </div>
            <div>
              <button type="submit" className=" btn btn-primary">
                Guardar
              </button>
              <Link className="btn btn-primary m-4" to="/">
                Volver
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
