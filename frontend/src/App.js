import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavigationRS from './components/NavigationRS';
import CreateNotes from './components/CreateNotes'
import CreateUser from './components/CreateUser'
import NotesList from './components/NotesList'


function App() {
  return (
   <Router>
    <NavigationRS/>

    <Route path="/" exact component={NotesList}/>
    <Route path="/edit/:id" component={CreateNotes}/>
    <Route path="/createUser" component={CreateUser}/>
    <Route path="/createNote" component={CreateNotes}/>


   </Router> 
  );
}

export default App;
