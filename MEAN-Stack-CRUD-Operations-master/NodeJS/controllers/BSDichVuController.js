const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { BSDichVu } = require('../models/BSDichVu');

// => localhost:3000/dsBSDichVu/
router.get('/', (req, res) => {
    BSDichVu.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Error in Retriving dsBSDichVu :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    BSDichVu.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Retriving BSDichVu :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var emp = new BSDichVu({
        MaDichVu: req.body.MaDichVu,
        MaBacSi: req.body.MaBacSi,
        TenBacSi: req.body.TenBacSi,
        TenDichVu: req.body.TenDichVu,
        DonGiaDichVu: req.body.DonGiaDichVu,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in BSDichVu Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        MaDichVu: req.body.MaDichVu,
        MaBacSi: req.body.MaBacSi,
        TenBacSi: req.body.TenBacSi,
        TenDichVu: req.body.TenDichVu,
        DonGiaDichVu: req.body.DonGiaDichVu,
    };
    BSDichVu.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in BSDichVu Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    BSDichVu.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in BSDichVu Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;