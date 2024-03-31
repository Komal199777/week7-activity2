const Message = require("./model");

// get all Messages
const getMessages = async (req, res) => {
    try {
      const messages = await Message.find({});
      res.status(200).json(messages);
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ message: "try again later" });
    }
  };

// Add one Message
const addMessages = async (req, res) => {
  const { title, description, targetDate, achieved } = req.body;

  const newMessage = new Message({ title, description, targetDate, achieved });
  await newMessage.save();
  res.status(201).json(newMessage);
};

// Get Message by ID
const getMessage = async (req, res) => {
  const { id } = req.params;

  const message = await Message.findById(id);
  if (!message) {
    return res.status(404).json({ message: "Message not found" });
  }
  res.status(200).json(message);
};

// Delete Message by ID
const deleteMessage = async (req, res) => {
  const { id } = req.params;

  const message = await Message.findByIdAndDelete({ _id: id });
  if (!message) {
    return res.status(404).json({ message: "Message not found" });
  }
  res.status(200).json({ message: "Message deleted successfully" });
};

// Delete all Books
const deleteAllMessages = async (req, res) => {
  const result = await Message .deleteMany({});
  res
    .status(200)
    .json({ message: `Deleted ${result.deletedCount} books successfully` });
};

// Update Message by ID
const updateMessage = async (req, res) => {
  const { id } = req.params;
  const updatedMessage = req.body;
  const message = await Message.findOneAndUpdate({ _id: id }, updatedMessage);
  if (!message) {
    return res.status(404).json({ message: "Message not found" });
  }
  res.status(200).json(message);
};

module.exports = {
  getMessages,
  addMessage,
  getMessage,
  deleteMessage,
  deleteAllMessages,
  updateMessage,
};