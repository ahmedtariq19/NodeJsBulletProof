import chai, { expect } from 'chai';
import { Container } from 'typedi';
import { IUser } from '../src/interfaces/IUser';
import mongoose from 'mongoose';

import User from '../src/models/user'
describe('User Model',()=>{
    it('Test required field in User model',()=>{

        let userModel=new User();
        // userModel={
        //     _id:'dfsd',
        //     name:'Ahmed',
        //     email:'example@mail.com',
        //     password:'1234',
        //     salt:'ddsd'
        // };
        expect(userModel.name).to.undefined;
        expect(userModel.email).to.undefined;
        expect(userModel.password).to.undefined;
        expect(userModel.salt).to.undefined;
        

    })
})