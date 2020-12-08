import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class NotesList extends Component {
  
  state = {

    notes: []
  };
  async componentDidMount() {
    this.getNotes();
    console.log(this.state.notes);
  }

  getNotes = async () => {
    const res = axios.get("http://localhost:4000/api/notes");
    this.setState({ notes: (await res).data });
  };

  guardarNota = async (e) => {
    e.preventDefault();
  };

eliminarNota = id =>{
axios.delete('http://localhost:4000/api/notes/'+id);
this.getNotes();
alert('Se elimino una nota')
this.getNotes();
}


  render() {
    return (
      <div className="row">
        <div className="container">
          <ul className="list-group">
            <div >
              <table class="table ">
                <thead>
                  <tr className="table table-dark">
                    <th scope="col">Titulo</th>
                    <th scope="col">Contenido</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Autor</th>
                    <th scope="col">Accion</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.notes.map (nota => 
                    <tr>
                      <th scope="row" key={nota._id}>
                        {nota.title}
                      </th>
                      <td>{nota.content}</td>
                      <td>{nota.date}</td>
                      <td>{nota.author}</td>
                      <Link 
                      className="btn btn-primary" 
                      to={"/edit/" +nota._id} 
                      >
                      Editar</Link>
                      <Link className="btn btn-primary m-1" 
                      onClick={ ()=>this.eliminarNota(nota._id)}>Borrar</Link>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
