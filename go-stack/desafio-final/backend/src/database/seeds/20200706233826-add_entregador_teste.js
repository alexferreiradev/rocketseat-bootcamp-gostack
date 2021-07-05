module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      'user',
      [
        {
          name: 'Entregador FastFeet Teste',
          email: 'entregador@fastfeet.com',
          entregador: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
