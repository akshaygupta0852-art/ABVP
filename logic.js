require('dotenv').config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const router = express.Router();
const app = express();

app.use(cors())
app.use(express.json());
const PORT = process.env.PORT || 3000;
const dbURI = process.env.MONGODB_URL // Replace with your MongoDB connection string
const connectDB = async () => {
  try {
    // Ensure process.env.MONGO_URI is exactly what you named it in Render
    await mongoose.connect(dbURI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

connectDB();

// DB schema

const userSchema = mongoose.Schema({
  name: {type: String, required : true},
  mobile: {type: Number, unique: true, required : true},
  address:  {type: String, required : true},
  schoolCollege:  {type: String, required : true},
  pincode: {type: Number, required : true},
});
const users = mongoose.model("users", userSchema);

// new member save

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

// admin login logic here

app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;
  // Add your admin login logic here
    if (username === process.env.ADMIN_MOBILE && password === process.env.ADMIN_PASSWORD) {
      res.status(200).json({ message: "Admin login successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
});

// Send database data

app.get("/api/admin/fetchdata", async (req,res)=>{
  try{
    const studentDetails = await users.find();
    res.status(200).json(studentDetails);
  }
  catch(err){
    console.log('Error appeared while fetching data', err);
    res.status(500).json({error: 'Failed to fetch student data'})
  }
})

// server listen

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});