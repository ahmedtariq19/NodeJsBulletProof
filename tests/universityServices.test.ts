import  { createUinversity, getUinversities, univerities } from "../src/services/universityServices"
import { describe, it} from 'mocha'
import chai ,{ expect } from 'chai'
import {Request, Response, NextFunction } from 'express'

import sinon from 'sinon'

// const mockResponse = () => {
//     const res = {status,json};
//     res.status = sinon.stub().returns(res);
//     res.json = sinon.stub().returns(res);
//     return res;
//   };
//   const mockRequest:Request = (body) => ({
    
//     body,
//   });
  


describe('University Services',()=>{
    it('Create University function',async()=>{
        
        let data ={id:Math.random().toString(), name:'Cust', worldRank:1000,numberOfStudents:1000,numberOfDepatments:10
    }
    const req =<Request>{
        body:{
            data
        }
    }
    const res= <Response>{
       
        status:sinon.stub().returns(),
        
    };
        
        const next:NextFunction=sinon.stub().returns;
        await createUinversity(req,res,next)
        sinon.assert(res.status).calledWith(200);
        sinon.assert(res.json).toHaveBeenCalledWith({
            data:data
        });
        // expect(res.json).equal({
        //     data
        // })
    })
    it('Test get university function',async()=>{
        const req =<Request>{
            body:{}    
            
        }
        const res= <Response>{
           
            status:sinon.stub().returns(),
            
        };
            
            const next:NextFunction=sinon.stub().returns;
            await getUinversities(req,res,next)
            expect(res.status).equal(200)
      })
})