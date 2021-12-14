const mongoose = require('mongoose');

var BSDichVu = mongoose.model('BSDichVu', {
    MaDichVu: { type: String },
    MaBacSi: { type: String },
    TenBacSi: { type: String },
    TenDichVu: { type: String },
    DonGiaDichVu: { type: Number }
});

module.exports = { BSDichVu };