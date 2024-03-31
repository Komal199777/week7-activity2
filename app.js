const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getMessages,
  addMessage,
  getMessage,
  updateMessage,
  deleteMessage,
  deleteAllMessages,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// get all Messages
const getMessage = async (req, res) => {
    try {
      const message = await message.find({});
      res.status(200).json(message);
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ message: "try again later" });
    }
  };

// POST a new Message
app.post("/messages", addMessages);

// GET a single Message
app.get("/messages/:id", getMessage);

// Update Message using PUT
app.put("/messages/:id", updateMessage);

// DELETE a Message
app.delete("/messages/:id", deleteMessage);

// DELETE all Message
app.delete("/messages", deleteAllMessages);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});