import { Authorizer } from "../../app/Authorization/Authorizer";
import { SessionTokenDBAccess } from "../../app/Authorization/SessionTokenDBAccess";
import { UserCredentialsDbAccess } from "../../app/Authorization/UserCredentialsDbAccess";
import { Account, SessionToken } from "../../app/Models/ServerModels";

jest.mock("../../app/Authorization/SessionTokenDBAccess")
jest.mock("../../app/Authorization/UserCredentialsDbAccess")


const someAccount: Account = {
  username: 'someUser',
  password: 'somePassword'
}
describe('Authorizer test suite', () => {
  let authorizer: Authorizer;

  const SessionTokenDBAccessMock = {
    storeSessionToken: jest.fn(),
    getToken: jest.fn(),
  };
  const UserCredentialsDbAccessMock = {
    getUserCredential: jest.fn(),
  };

  beforeEach(() => {
    authorizer = new Authorizer(
      SessionTokenDBAccessMock as any,
      UserCredentialsDbAccessMock as any
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  })

  test('constructor arguments', () => {
    new Authorizer();
    expect(SessionTokenDBAccess).toBeCalled();
    expect(UserCredentialsDbAccess).toBeCalled();
  });

  test('should return sessionToken for valid credentials', async () => {
    jest.spyOn(global.Math, 'random').mockReturnValueOnce(0);
    jest.spyOn(global.Date, 'now').mockReturnValueOnce(0);
    UserCredentialsDbAccessMock.getUserCredential.mockReturnValue({
      accessRights: [1, 2, 3],
      username: 'someUser',
      password: 'somePassword'
  });
    const expectedSessionToken: SessionToken = {
      userName: 'someUser',
      accessRights: [1, 2, 3],
      valid: true,
      tokenId: '',
      expirationTime:new Date(60 * 60 * 1000),
    };
    const sessionToken = await authorizer.generateToken(someAccount);
    expect(expectedSessionToken).toEqual(sessionToken);
    expect(SessionTokenDBAccessMock.storeSessionToken).toBeCalledWith(sessionToken)
  });

});
