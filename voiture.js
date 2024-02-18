const express = require('express');
const router = express.Router();
const path = require('path');
router.use(express.static(path.join(__dirname, 'public')));
const Voitures = [
    {id:1, name : "Range Rover"},
    {id:2, name : "Mini cooper"},
    {id:5, name : "MERCIDES-BENZ"},
    {id:3, name : "Bmw"},
    {id:4, name : "JEEP"}
];


router.get('/all',(req,res) => {
    res.json(Voitures);
});


router.post('/add',(req,res) => {
    res.send('<form method="post" actoin""> <label>id</label><input type="number" id="id"><label>name</label><input type="text" id="name"><button type="submit">login</button></form>');

});


router.get('/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const post = Voitures.find(post => post.id === id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send("voiture n'exist pas");
    }
});

router.get('/getByName/:name', (req, res) => {
    const carName = req.params.name.toLowerCase();
    const car = Voitures.find(car => car.name.toLowerCase() === carName);
    
    if (car) {
        res.json(car);
    } else {
        res.status(404).send("oiture n'exist pas");
    }
});


router.put('/modify/:id',(req,res) =>{
    const id = parseInt(req.params.id);
    const post = Voitures.find(post => post.id === id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send("voiture n'exist pas");
    }
});





router.delete('/delete/:id',(req,res) =>{
    const id = parseInt(req.params.id);
    const post = Voitures.find(post => post.id === id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send("voiture n'exist pas");
    }
});


module.exports = router;