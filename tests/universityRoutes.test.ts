import university from '../src/api/routes/university'
import request from 'supertest'
import { createUinversity, getUinversities } from '../src/services/universityServices'
import express from 'express'
import { expect } from 'chai'
import universityModel from "../src/models/universityModel"

const app = express();

describe('Test University Routes',()=>{
    it('Test get route',async()=>{
        await request(app)
        .get('/api/uni/getuni',(req,res)=>{
            expect(res.status).equal(200);
        })
        
    })
    it('Test post route',async()=>{
        let newUniversity: universityModel={id:Math.random().toString(),name:'Cust',worldRank:1000,numberOfStudents:3000,numberOfDepartments:10};

        const res= await request(app)
        .post('/api/uni/createuni')
        .send({newUniversity});
        expect(res.status).equal(200);
    })

})