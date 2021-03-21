const bcrypt = require("bcryptjs");

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "user_go-barber",
      [
        {
          name: "Administrador do sistema",
          email: "admin@barber.com",
          password_hash: bcrypt.hashSync(process.env.ADMIN_PASS, 8),
          avatar_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: QueryInterface => {
    return QueryInterface.bulkDelete("user_go-barber");
  }
};
