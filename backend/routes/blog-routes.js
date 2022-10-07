import express from "express";
import { createBlog, getAllBlogs, getById, updateBlog } from "../controllers/blog-controller";

const blogRouter = express.Router()

blogRouter.get("/", getAllBlogs)

blogRouter.post("/create", createBlog)

blogRouter.put("/update/:id", updateBlog)

blogRouter.get("/:id", getById)

blogRouter.delete("/:id", getById)

export default blogRouter;