// import UserService from '../../../src/services/user';
import { describe, it} from 'mocha'
import { assert } from 'chai'
describe('Sample Test', () => {
  it('can add 2 numbers', () => {
    assert.equal(1,1,'Equal');
  });
});

  // describe('User service unit tests', () => {
  //   describe('Signup', () => {
  //     test('Should create user record and emit user_signup event', async () => {
  //       const eventEmitterService = {
  //         emit: jest.fn(),
  //       };

  //       const userModel = {
  //         create: (user) => {
  //           return {
  //             ...user,
  //             _id: 'mock-user-id'
  //           }
  //         },
  //       };

  //       const companyModel = {
  //         create: (user) => {
  //           return {
  //             owner: user._id,
  //             companyTaxId: '12345',
  //           }
  //         },
  //       };

  //       const userInput= {
  //         fullname: 'User Unit Test',
  //         email: 'test@example.com',
  //       };

  //       const userService = new UserService(userModel, companyModel, eventEmitterService);
  //       const userRecord = await userService.SignUp(teamId.toHexString(), userInput);

  //       expect(userRecord).toBeDefined();
  //       expect(userRecord._id).toBeDefined();
  //       expect(eventEmitterService.emit).toBeCalled();
  //     });
  //   })
  // })