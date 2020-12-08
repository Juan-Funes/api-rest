const {Router} = require ('express');
const router = Router();
const {getnotes,createNote,getnote,updateNote,deleteNote} =require('../controllers/notesController');
 
router.route('/')
        .get( getnotes)
        .post(createNote)

router.route('/:id')
        .get(getnote)
        .put(updateNote)
        .delete(deleteNote)
                




module.exports = router;