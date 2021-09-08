export default {
  up: queryInterface =>
    queryInterface.bulkInsert('users', [
      {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]),
  down: queryInterface => queryInterface.bulkDelete('users', null, {})
};