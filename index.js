const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override");

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// MongoDB connection
main()
  .then(() => console.log("MongoDB connection successful ✅"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// Root route
app.get("/", (req, res) => {
  res.send("Root is working ✅");
});

// Show all chats
app.get("/chats", async (req, res) => {
  try {
    let chats = await Chat.find();
    res.render("index", { chats });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching chats");
  }
});

// New chat form
app.get("/chats/new", (req, res) => {
  res.render("new");
});

// Create chat
app.post("/chats", async (req, res) => {
  const { from, to, msg } = req.body;
  try {
    const newChat = new Chat({ from, to, msg, created_at: new Date() });
    await newChat.save();
    console.log("Chat was saved ✅");
    res.redirect("/chats");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving chat");
  }
});

// Edit chat form
app.get("/chats/:id/edit", async (req, res) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) return res.status(404).send("Chat not found");
    res.render("edit", { chat });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching chat for edit");
  }
});

// Update chat
app.put("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { msg } = req.body; // ✅ match form name="msg"

    let updatedChat = await Chat.findByIdAndUpdate(
      id,
      { msg },
      { runValidators: true, new: true }
    );

    if (!updatedChat) return res.status(404).send("Chat not found");

    console.log("Updated chat:", updatedChat);
    res.redirect("/chats");
  } catch (err) {
    console.error("Error updating chat:", err);
    res.status(500).send("Error updating chat");
  }
});

//Destroy Route
app.delete("/chats/:id", async (req, res) => {
  let {id} = req.params;
  let deletedChat= await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
});

// Start server
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
