// import UserService from '../../../src/services/user';
import {Container} from 'typedi';
import express from 'express';
import AuthService from '../src/services/auth';
import loaders from '../src/loaders';
import { describe, it} from 'mocha'
import { assert, expect} from 'chai'
import mongoose from 'mongoose';
import MailerService from '../src/services/mailer';
import { EventDispatcher as EventDispatcherClass } from 'event-dispatch';



describe('Sample Test', () => {
  it('can add 2 numbers', () => {
    assert.equal(1,1,'Not equal');
  });
});


//  let db = null;

//  before(async (done) => {
//      const expressApp = express();
//   //   const { mongoConnection } = await loaders({expressApp});
//     //db = mongoConnection;
//          done();

// });
//  after(async (done) => {
//      const UserModel = Container.get('userModel');
//      await UserModel.deleteMany({email: "test@example.com"});
// //     db.connection.close(() => done());
// });

 describe('Auth service', () => {
     describe('SignUp', () => {

         it('should create user record', async () => {
             const userInput = {
                name:'test',
                 email: 'test@example.com',
                 password: 'test',
             };
             const mailerServiceInstance = Container.get(MailerService);

             const UserModel = Container.get('userModel');
             const Logger = Container.get('logger');
             const eventDispatcher = new EventDispatcherClass();

             const authService = new AuthService(UserModel,mailerServiceInstance,Logger,eventDispatcher);

            const {user, token} = await authService.SignUp(userInput);
               assert.isNotNull(user);
             assert.isNotNull(user._id);
             assert.isNotNull(user.name);
             assert.isNotNull(user.email);
             assert.isNotNull(user.password);
         });
     });
    })
//     describe('SignIn', () => {
//         it('should be able to login', async () => {
//             const UserModel = Container.get('userModel');
//             const Logger = Container.get('logger');
//             const authService = new AuthService(UserModel, Logger);
//             const {user, token} = await authService.SignIn('test@example.com', 'test');
//             expect(user).toBeDefined();
//             expect(user._id).toBeDefined();
//             expect(user.firstName).toBe("User");
//             expect(user.lastName).toBe("Unit Test");
//             expect(user.email).toBe("test@example.com");
//             expect(user.password).not.toBeDefined();
//             expect(user.salt).not.toBeDefined();
//             expect(token).toBeDefined();

//         });
//         it('should throw an error when email was not registered yet', async () => {
//             const UserModel = Container.get('userModel');
//             const Logger = Container.get('logger');
//             const authService = new AuthService(UserModel, Logger);
//             await expect(authService.SignIn('unexistingemail@unexisting.com', 'bliepbloep')).rejects.toThrow();

//         });
//     })
// });
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