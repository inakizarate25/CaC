const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, '/public')));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, '/src/views'));


app.use(express.urlencoded({extended:false}));

app.use(require("./src/routes/mainRoutes")); 
app.use(require("./src/routes/shopRoutes"));
app.use(require("./src/routes/adminRoutes"));


app.use((req, res, next) => {
    res.status(404).send("La página no existe");
});

const PORT= 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
