const Blog = require("../models/blogModel");

async function getBlogs(req, res) {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createBlog = async (req, res) => {
  try {
    const { title, description, author } = req.body;
    const blog = new Blog({ title, description, author });
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, author } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, description, author },
      { new: true }
    );
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};
