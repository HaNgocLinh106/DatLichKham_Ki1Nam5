const mongoose = require('mongoose');

var LichKham = mongoose.model('LichKham', {
    maLichKham: { type: String },
    maBacSi: { type: String },
    tenBacSi: { type: String },
    ngay: { type: String },
    gio: { type: String }
});

module.exports = { LichKham };