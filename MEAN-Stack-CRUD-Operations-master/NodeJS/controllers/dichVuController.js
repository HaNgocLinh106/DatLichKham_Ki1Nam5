const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { DichVu } = require('../models/dichVu');

// => localhost:3000/dsDichVu/
router.get('/', (req, res) => {
    DichVu.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Error in Retriving DichVus :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    DichVu.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Retriving DichVu :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var emp = new DichVu({
        maDichVu: req.body.maDichVu,
        tenDichVu: req.body.tenDichVu,

    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in DichVu Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        maDichVu: req.body.maDichVu,
        tenDichVu: req.body.tenDichVu,
    };
    DichVu.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in DichVu Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    DichVu.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in DichVu Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;