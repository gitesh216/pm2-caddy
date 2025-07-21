import express from "express"

const app = express();
const PORT = 3000;

// a simple nodejs server with two endpoints

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/health", (req, res) => {
    res.send("OK");
});


app.listen(PORT, () => {
    console.log("Example app listening on port: ", PORT);
});