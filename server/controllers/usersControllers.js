const connection = require("../config/db");

class usersControllers {
  getAllUsers = (req, res) => {
    console.log("Holaaaa");
    res.send("Hola desde el controlador");
  };
}
module.exports = new usersControllers();
