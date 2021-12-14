const mongoose = require('mongoose');

var DichVu = mongoose.model('DichVu', {
    maDichVu: { type: String },
    tenDichVu: { type: String },
});

module.exports = { DichVu };