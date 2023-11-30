const express = require("express");
const app = express();
const path = require("path");
const mainRoutes = require("./src/routes/mainRoutes");
const shopRoutes = require("./src/routes/shopRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const authRoutes = require("./src/routes/authRoutes");

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

app.use((req, res, next) => {
  res.status(404).send("La página no existe");
});

const PORT = 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
