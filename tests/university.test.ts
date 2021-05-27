import chai, { expect } from 'chai';
import universityModel from '../src/models/universityModel'
describe('University model',()=>{
    it('should have required fields',()=>{
        let uniModel:universityModel
        ={
            id:'asd',
            name:'cust',
            worldRank:1000,
            numberOfStudents:4500,
            numberOfDepartments:10

        };
        expect(uniModel.id).to.exist;
        expect(uniModel.name).to.exist;
        expect(uniModel.numberOfStudents).to.exist;
        expect(uniModel.worldRank).to.exist;
        expect(uniModel.numberOfDepartments).to.exist;
    })
})
