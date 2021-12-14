const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://HaNgocLinh106:Gau106@cluster0.bclnu.mongodb.net/QLLichKham', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;