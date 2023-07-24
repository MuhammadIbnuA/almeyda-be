const isAuthenticated = require("../middleware/authmiddleware");
const express = require('express');
const router = express.Router();
const {
  createPenduduk,
  getAllPenduduk,
  getPendudukById,
  updatePenduduk,
  deletePenduduk
} = require('../controller/pendudukcontroller');

// Create a new penduduk
router.post('/penduduk',isAuthenticated, createPenduduk);

// Get all penduduk
router.get('/penduduk',isAuthenticated, getAllPenduduk);

// Get a specific penduduk by ID
router.get('/penduduk/:id', getPendudukById);

// Update a penduduk
router.put('/penduduk/:id', updatePenduduk);

// Delete a penduduk
router.delete('/penduduk/:id', deletePenduduk);

module.exports = router;

