const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");
const UserCreateService = require("./UserCreateService");

it("user should be created", async () => {
  const user = {
    name: "Teste",
    email: "teste@mail.com",
    password: "password",
  };

  const userRepositoryInMemory = new UserRepositoryInMemory();
  const userCreateService = new UserCreateService(userRepositoryInMemory);
  const userCreated = await userCreateService.execute(user);

  expect(userCreated).toHaveProperty("id");
});
