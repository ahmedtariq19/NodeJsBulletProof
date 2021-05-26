import { Router, Request, Response } from 'express';
import middlewares from '../middlewares';
import {createUinversity, getUinversities} from '../../services/universityServices'
const route = Router();
export default (app: Router) => {
    app.use('/uni', route);
  
    route.get('/getuni',getUinversities);
    route.post('/createuni',createUinversity);
  };
  