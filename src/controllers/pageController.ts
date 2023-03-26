import { Request,Response } from "express";

export const home = (req:Request, res:Response) =>{
    res.send('home no controller');
    //res.render('pages/page');
}
export const dogs = (req:Request, res: Response) =>{

}
export const cats = (req:Request, res: Response) =>{

}
export const fishes = (req:Request, res: Response) =>{

}