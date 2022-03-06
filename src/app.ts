import express,{Request,Response} from 'express';

const app = express();

app.use(express.json());

app.route('/api/books').get((req:Request,res:Response)=>{
    return res.send('You make a GET');
}).post((req:Request, res:Response)=>{
    return res.send("You made a post request");
}).put((req:Request, res:Response)=>{
    return res.send("You made a PUT request");
}).all((req:Request, res:Response)=>{
    return res.send("You made an ALL request");
});

app.listen(3000,()=>{
    console.log("Application listening at localhost:3000")
});