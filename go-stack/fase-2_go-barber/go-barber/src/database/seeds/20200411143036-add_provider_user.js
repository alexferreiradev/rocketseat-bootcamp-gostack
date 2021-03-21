const bcrypt = require("bcryptjs");

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "user_go-barber",
      [
        {
          name: "Usuario Provider",
          email: "provider@teste.com.br",
          password_hash: bcrypt.hashSync("1234567", 8),
          avatar_id: 1,
          provider: true,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: QueryInterface => {
    return QueryInterface.bulkDelete("user_go-barber", {email: 'provider@teste.com.br'}
    );
  }
};
