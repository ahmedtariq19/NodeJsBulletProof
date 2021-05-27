// import UserService from '../../../src/services/user';
import {Container} from 'typedi';
import express from 'express';
//import AuthService from '../src/services/auth';
import loaders from '../src/loaders';
import request from 'supertest';
import httpStatus from 'http-status';
import { describe, it} from 'mocha'
import chai ,{ assert, expect} from 'chai'
import mongoose from 'mongoose';
import MailerService from '../src/services/mailer';
import { EventDispatcher as EventDispatcherClass } from 'event-dispatch';
import universityModel from "../src/models/universityModel"
import {createUinversity, getUinversities} from "../src/services/universityServices"
import university from '../src/api/routes/university';
import app from '../src/api/index';
import { doesNotMatch } from 'assert';



// before(async (done)=>{
//   const mod = await import('./');
//     app = (mod as any).default;
// })
describe('Sample Test', () => {
  it('can add 2 numbers', () => {
    assert.equal(1,1,'Not equal');
  });
});
describe('Test university',()=>{
  it('POST Create new university', async()=>{
    let newUniversity: universityModel={id:Math.random().toString(),name:'Cust',worldRank:1000,numberOfStudents:3000,numberOfDepartments:10};
    await request('http://localhost:3000')
        .post('/api/uni/createuni')
        .send({
          id: newUniversity.id,
          name:newUniversity.name,
          worldRank:newUniversity.worldRank,
          numberOfStudent:newUniversity.numberOfStudents,
          numberOfDepartments:newUniversity.numberOfDepartments
        }).expect(httpStatus.OK)
        .then(res=>{
          expect(res.body.id).to.exist;
        })

      
  })
  it('GET get all universities', async()=>{
    await request('http://localhost:3000')
        .get('/api/uni/getuni')
        .expect(httpStatus.OK)
        .then(res=>{
          expect(res.body).to.exist;
         // console.log(res.body)
        })
  })
  it('Test create university function',async()=>{
    let newUniversity: universityModel={id:Math.random().toString(),name:'Cust',worldRank:1000,numberOfStudents:3000,numberOfDepartments:10};
    expect(createUinversity).to.not.be.null;
  })
})


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

//  describe('Auth service', () => {
//      describe('SignUp', () => {

//          it('should create user record', async () => {
//              const userInput = {
//                 name:'test',
//                  email: 'test@example.com',
//                  password: 'test',
//              };
//              const mailerServiceInstance = Container.get(MailerService);

//              const UserModel = Container.get('userModel');
//              const Logger = Container.get('logger');
//              const eventDispatcher = new EventDispatcherClass();

//              const authService = new AuthService(UserModel,mailerServiceInstance,Logger,eventDispatcher);

//             const {user, token} = await authService.SignUp(userInput);
//                assert.isNotNull(user);
//              assert.isNotNull(user._id);
//              assert.isNotNull(user.name);
//              assert.isNotNull(user.email);
//              assert.isNotNull(user.password);
//          });
//      });
//     })
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