import universityModel from '../models/universityModel'
import { RequestHandler } from 'express';

export const univerities: universityModel[]=[];
 export const createUinversity: RequestHandler = (req,res)=>{
const {name, worldRank, numberOfStudents, numberOfDepartments} = req.body;
let newUniversity: universityModel={id:Math.random().toString(),name:name,worldRank:worldRank,numberOfStudents:numberOfStudents,numberOfDepartments:numberOfDepartments};
univerities.push(newUniversity);
res.status(200).json(newUniversity);


}
export const getUinversities:RequestHandler = (req, res)=>{
res.status(200).json({univerity:univerities}); 

}
