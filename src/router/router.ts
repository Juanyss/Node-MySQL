import {Router,Request,Response} from 'express';

const router = Router();

router.get('/hi',(req:Request, res:Response) => {
    res.status(200).json({
        ok:true,
        msg:"Welcome to the jungle"
    })
});

router.get('/hi/:user',(req:Request, res:Response) => {
  let user = req.params.user;

    res.status(200).json({
        ok:true,
        msg:`Welcome to the jungle ${user}`
    })
});

export default router;
