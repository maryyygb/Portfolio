import express from "express"

const app = express();

app.get("/api/projects", (req, res) => {
    res.send("This is the projects located.");
})

app.listen(5001, () => {
    console.log("Server started on Port: ", 5001);
})
