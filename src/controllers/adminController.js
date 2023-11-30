const admin = (req, res) => {
  res.render("admin/admin");
};
const create = (req, res) => {
  res.render("admin/create");
};
const postCreate = (req, res) => {
  res.send("Route for create item");
};
const edit = (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.render("admin/edit");
};
const putEdit = (req, res) => {
  res.send("Route for edit item");
};
const deleteItem = (req, res) => {
  res.send("Route for delete item");
};

module.exports = {
  admin,
  create,
  postCreate,
  edit,
  putEdit,
  deleteItem,
};
