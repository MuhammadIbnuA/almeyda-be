const PendudukModel = require('../models/pendudukmodel');

// Create a new penduduk
async function createPenduduk(req, res) {
  try {
    const { kepalakeluarga, jumlahAnggota, rt, rw } = req.body;
    const penduduk = new PendudukModel({ kepalakeluarga, jumlahAnggota, rt, rw });
    const savedPenduduk = await penduduk.save();
    res.status(201).json(savedPenduduk);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the penduduk' });
  }
}

// Get all penduduk
async function getAllPenduduk(req, res) {
  try {
    const penduduk = await PendudukModel.find();
    res.json(penduduk);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the penduduk' });
  }
}

// Get a specific penduduk by ID
async function getPendudukById(req, res) {
  try {
    const { id } = req.params;
    const penduduk = await PendudukModel.findById(id);
    if (!penduduk) {
      return res.status(404).json({ error: 'Penduduk not found' });
    }
    res.json(penduduk);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the penduduk' });
  }
}

// Update a penduduk
async function updatePenduduk(req, res) {
  try {
    const { id } = req.params;
    const { kepalakeluarga, jumlahAnggota, rt, rw } = req.body;
    const updatedPenduduk = await PendudukModel.findByIdAndUpdate(
      id,
      { kepalakeluarga, jumlahAnggota, rt, rw },
      { new: true }
    );
    if (!updatedPenduduk) {
      return res.status(404).json({ error: 'Penduduk not found' });
    }
    res.json(updatedPenduduk);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the penduduk' });
  }
}

// Delete a penduduk
async function deletePenduduk(req, res) {
  try {
    const { id } = req.params;
    const deletedPenduduk = await PendudukModel.findByIdAndDelete(id);
    if (!deletedPenduduk) {
      return res.status(404).json({ error: 'Penduduk not found' });
    }
    res.json({ message: 'Penduduk deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the penduduk' });
  }
}

module.exports = {
  createPenduduk,
  getAllPenduduk,
  getPendudukById,
  updatePenduduk,
  deletePenduduk
};
