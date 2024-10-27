const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");
const AppError = require("../utils/AppError");
const UserCreateService = require("./UserCreateService");

describe("UserCreateService", () => {
  let userRepository;
  let userCreateService;

  beforeEach(() => {
    userRepository = new UserRepositoryInMemory();
    userCreateService = new UserCreateService(userRepository);
  });

  it("should create a user", async () => {
    const user = {
      name: "Teste",
      email: "teste@mail.com",
      password: "123",
    };

    const userCreated = await userCreateService.execute(user);

    expect(userCreated).toHaveProperty("id");
  });

  it("should throw an AppError if email is already in use", async () => {
    const user1 = {
      name: "Teste 1",
      email: "teste@mail.com",
      password: "123",
    };
    const user2 = {
      name: "Teste 2",
      email: "teste@mail.com",
      password: "456",
    };

    await userCreateService.execute(user1);
    await expect(userCreateService.execute(user2)).rejects.toEqual(
      new AppError("Este e-mail já está em uso!")
    );
  });
});
