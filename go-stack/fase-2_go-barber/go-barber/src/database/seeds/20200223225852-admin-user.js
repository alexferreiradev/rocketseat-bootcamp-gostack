const bcrypt = require("bcryptjs");

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "user",
      [
        {
          name: "Administrador do sistema",
          email: "admin@barber.com",
          password_hash: bcrypt.hashSync("1234567", 8),
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: QueryInterface => {
    return QueryInterface.bulkDelete("user");
  }
};
