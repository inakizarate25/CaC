require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
// const session = require("express-session");
const session = require("cookie-session");


// app.use(
//   session({
//     secret: "S3cr3t01",
//     resave: false,
//     saveUninitialized: false,
//   })
// )

app.use(
  session({
    keys: ["S3cr3t01", "S3cr3t02"],
  })
)
const isLogin = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect("/auth/login");
  }
  next();
};

const sequelize = require("./src/models/connection");
const mainRoutes = require("./src/routes/mainRoutes");
const shopRoutes = require("./src/routes/shopRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const authRoutes = require("./src/routes/authRoutes");

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use( methodOverride("_method"));

app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/admin", isLogin, adminRoutes);
app.use("/auth", authRoutes);

app.use((req, res, next) => {
  res.status(404).send("La página no existe");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log(error);
  }
  // puerto
  console.log(`http://localhost:${PORT}`);
});
