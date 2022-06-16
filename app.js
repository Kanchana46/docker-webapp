const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*app.get("/", (req, res) => {
    res.send("Hello from NodeJS!");
});*/

app.use(express.static(__dirname.replace(/\\/g, "/") + '/dist/frontend/'))

app.get('/', function (req, res) {
    res.sendFile(__dirname.replace(/\\/g, "/") + '/dist/frontend/' + "index.html");
});

app.get('/login', (req, res) => {
    res.json({
        "status": 'success'
    })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});