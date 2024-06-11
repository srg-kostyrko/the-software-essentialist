
import { mockDeep } from "jest-mock-extended";
import { createAPIClient } from "@dddforum/shared/src/api";
import { CreateUserCommandBuilder } from "@dddforum/shared/tests/support/builders/createUserCommandBuilder";
import { UserResponseStub } from "@dddforum/shared/tests/support/stubs/userResponseStub";
import { Application } from "../../src/shared/application/applicationInterface";
import { WebServer } from "../../src/shared/webAPI/webServer";

describe("users http API", () => {

  /**
   * For these, you don't need to use the composition root. You're cleanly
   * starting up the web server and testing only the webserver to use case
   * connection.
   */

  let client = createAPIClient("http://localhost:3000");
  let application = mockDeep<Application>();
  let server = new WebServer({ port: 3000, application });

  beforeAll(async () => {
    await server.start();
  });

  afterAll(async () => {
    await server.stop();
  });

  it("can create users", async () => {
    let createUserCommand = new CreateUserCommandBuilder()
      .withFirstName("Khalil")
      .withLastName("Stemmler")
      .withRandomUsername()
      .withRandomEmail()
      .build();

    let createUserResponseStub = new UserResponseStub()
      .fromCommand(createUserCommand)
      .build();

    application.user.createUser.mockReturnValue(
      new Promise((resolve) =>
        resolve({ error: undefined, data: createUserResponseStub, success: true }),
      ),
    );

    // Act
    // Use the client library to make the api call (pass through as much
    // uncertainty as possible)
    await client.users.register(createUserCommand);

    // Communication: Expect it to have called the correct use case
    expect(application.user.createUser).toHaveBeenCalledTimes(1);
  });
});
