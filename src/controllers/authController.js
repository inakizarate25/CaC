const login = (req, res) => res.render("auth/login");
const postLogin = (req, res) => res.send("Route for login post");
const register = (req, res) => res.render("auth/register");
const postRegister = (req, res) => res.send("Route for register post");
const logout = (req, res) => res.send("Route fo logout view");

const authController = {
  login,
  postLogin,
  register,
  postRegister,
  logout,
};
module.exports = authController;
