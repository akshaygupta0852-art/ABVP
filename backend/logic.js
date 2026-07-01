require('dotenv').config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const router = express.Router();
const app = express();

app.use(cors())
app.use(express.json());
const PORT = process.env.PORT || 3000;
const dbURI = "mongodb://localhost:27017"; // Replace with your MongoDB connection string
mongoose.connect(dbURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const userSchema = mongoose.Schema({
  name: {type: String, required : true},
  mobile: {type: Number, unique: true, required : true},
  address:  {type: String, required : true},
  schoolCollege:  {type: String, required : true},
  pincode: {type: Number, required : true},
});

const users = mongoose.model("users", userSchema);
app.post("/api/users", async (req, res) => {
  const { name, mobile, address, schoolCollege, pincode } = req.body;

  try {
    const newUser = new users({ name, mobile, address, schoolCollege, pincode });
    await newUser.save();
    console.log("User saved successfully:", newUser);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;
  // Add your admin login logic here
    if (username === process.env.ADMIN_MOBILE && password === process.env.ADMIN_PASSWORD) {
      res.status(200).json({ message: "Admin login successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});