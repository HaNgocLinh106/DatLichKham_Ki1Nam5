const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { LichKham } = require('../models/lichKham');

// => localhost:3000/dsLichKham/
router.get('/', (req, res) => {
    LichKham.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Error in Retriving DSLichKham :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    LichKham.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Retriving LichKham :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var emp = new LichKham({
        maLichKham: req.body.maLichKham,
        maBacSi: req.body.maBacSi,
        ngay: req.body.ngay,
        gio: req.body.gio,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in LichKham Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        maLichKham: req.body.maLichKham,
        maBacSi: req.body.maBacSi,
        ngay: req.body.ngay,
        gio: req.body.gio,
    };
    LichKham.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in LichKham Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    LichKham.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in LichKham Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;