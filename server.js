const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const port = 3001;

// Replace <password> with your actual password
const uri = "mongodb+srv://almeyda:almeyda@cluster0.pimyglx.mongodb.net/?retryWrites=true&w=majority";

const {
  registerUser,
  login,
} = require("./controller/usercontroller");

const isAuthenticated = require("./middleware/authmiddleware");
const {
  createPenduduk,
  getAllPenduduk,
  getPendudukById,
  updatePenduduk,
  deletePenduduk
} = require('./controller/pendudukcontroller');

// Create a new penduduk
app.post('/penduduk',isAuthenticated, createPenduduk);

// Get all penduduk
app.get('/penduduk',isAuthenticated, getAllPenduduk);

// Get a specific penduduk by ID
app.get('/penduduk/:id', getPendudukById);

// Update a penduduk
app.put('/penduduk/:id', updatePenduduk);

// Delete a penduduk
app.delete('/penduduk/:id', deletePenduduk);


// Register a new user
app.post("/register",registerUser);

// Login
app.post("/login",login);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
