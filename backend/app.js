import express from "express";
import mongoose from "mongoose"
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";

const app = express()

app.use(express.json())

app.use("/api/user",router)

app.use("/api/blog",blogRouter)

// name to be added if error
mongoose.connect("mongodb+srv://admin:fTW7va4Kcb5yU5aM@cluster0.zskojp0.mongodb.net/?retryWrites=true&w=majority").then(
    () => app.listen(5000)).then(() => console.log("Connected to database and listening on port 5000")).catch((err) => console.log(err))