const notesController = {};
const Note = require('../models/note');

notesController.getnotes= async  (req, res)=> {
    const notes = await Note.find();
    console.log('Obteniendo notas');
    res.json (notes);
}

notesController.createNote= async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    });
    await newNote.save();
    console.log('Nota guardada');
    res.json({ message: 'Nota Guardada' });
}
/* {
"title" : "mi nota",
"content": "esta es mi primer nota",
"author": "JUAN"
} */

notesController.updateNote= async(req,res) => {
    const { title, author, content } = req.body;
    await Note.findOneAndUpdate({_id:req.params.id},{
    //await Note.findByIdAndUpdate(req.params.id,{
        title,
        content,
        author

    });
res.json({message : 'Nota actualizada'})
}



notesController.getnote = async(req,res) => {
    const note = await Note.findById(req.params.id);
    console.log('Obteniendo nota con id',req.params.id);
    res.json(note)
}



notesController.deleteNote= async(req,res) => {
    const note = await Note.findByIdAndDelete(req.params.id);
    console.log('Eliminando nota con id ',req.params.id);
    res.json(note);

}

module.exports = notesController;