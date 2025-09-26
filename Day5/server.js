const express = require("express");
const connectDB = require("./src/db/db");
const noteModel = require("./src/models/note.model");

connectDB();
const app = express();

app.use(express.json());

app.post("/notes", async (req, res) => {
  const { title, content } = req.body;

  console.log(title, content);

  await noteModel.create({
    title,
    content,
  });

  res.json({
    message: "Note created suucessfully",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();

  res.json({
    message: "Notes fetched successfully",
    notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const noteId = req.params.id;

  await noteModel.findOneAndDelete(noteId);
  _id: noteId;

  res.json({
    message: "Note deleted successfully",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const noteId = req.params.id;
  const { title } = req.body;

  await noteModel.findOneAndUpdate(
    {
      _id: noteId,
    },
    {
      title: title,
    }
  );
  req.json({
    message: "Note updated successfully",
  });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
