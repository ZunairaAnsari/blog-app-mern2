const express = require("express");
const blogRouter = express.Router();

const {
  getBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogController");

blogRouter
  .get("/", getBlogs)
  .post("/add", createBlog)
  .delete("/:id", deleteBlog)
  .put("/:id", updateBlog);

module.exports = blogRouter;
