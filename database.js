const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/mean_crud';

mongoose.connect(URI)
.then(db => console.log('DB is Connect'))
.catch(err => console.log('Hay Pedos =>', err));

module.exports = mongoose;