const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { BacSi } = require('../models/BacSi');

// => localhost:3000/BacSis/
router.get('/', (req, res) => {
    BacSi.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving BacSi :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        BacSi.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving BacSi :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var BS = new BacSi({
        MaBacSi: req.body.MaBacSi,
        TenBacSi: req.body.TenBacSi,
        SDT: req.body.SDT,
        GioiThieuChung: req.body.GioiThieuChung,
        ChiPhiTuVan: req.body.ChiPhiTuVan,
        ChucVi: req.body.ChucVi,
        Khoa: req.body.Khoa,
        PhongKham: req.body.PhongKham,
    });
    BS.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in BacSi Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var BS = {
        MaBacSi: req.body.MaBacSi,
        TenBacSi: req.body.TenBacSi,
        SDT: req.body.SDT,
        GioiThieuChung: req.body.GioiThieuChung,
        ChiPhiTuVan: req.body.ChiPhiTuVan,
        ChucVi: req.body.ChucVi,
        Khoa: req.body.Khoa,
        PhongKham: req.body.PhongKham,
    };
    BacSi.findByIdAndUpdate(req.params.id, { $set: BS }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in BacSi Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    BacSi.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in BacSi Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;