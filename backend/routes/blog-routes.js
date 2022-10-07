import express from "express";
import { createBlog, deletePost, getAllBlogs, getById, getByUserId, updateBlog } from "../controllers/blog-controller";

const blogRouter = express.Router()

blogRouter.get("/", getAllBlogs)

blogRouter.post("/create", createBlog)

blogRouter.put("/update/:id", updateBlog)

blogRouter.get("/:id", getById)

blogRouter.delete("/delete/:id", deletePost)

blogRouter.get("/user/:id", getByUserId)

export default blogRouter;