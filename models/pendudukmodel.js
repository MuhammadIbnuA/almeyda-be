const mongoose = require('mongoose');

const pendudukSchema = new mongoose.Schema({
  kepalakeluarga: { type: String, required: true },
  jumlahAnggota: { type: String, required: true },
  rt: { type: String, required: true },
  rw: { type: String, required: true }
});

const PendudukModel = mongoose.model('Penduduk', pendudukSchema);

module.exports = PendudukModel;
