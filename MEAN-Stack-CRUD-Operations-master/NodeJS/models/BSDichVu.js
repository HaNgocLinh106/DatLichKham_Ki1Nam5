const mongoose = require('mongoose');

var BSDichVu = mongoose.model('BSDichVu', {
    maDichVu: { type: String },
    maBacSi: { type: String },
    tenBacSi: { type: String },
    tenDichVu: { type: String },
    donGiaDichVu: { type: Number }
});

module.exports = { BSDichVu };