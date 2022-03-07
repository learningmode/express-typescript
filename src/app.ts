import express,{NextFunction, Request,Response} from 'express';

const app = express();

app.use(express.json());

function handleGetBookOne(req:Request,res:Response,next:NextFunction){
    //@ts-ignore
    console.log(req.name);
    next();
}

function handleGetBookTwo(req:Request,res:Response,next:NextFunction){
    console.log('second Handle');
    //@ts-ignore
    return res.send(req.name);
}

function middleware(req:Request,res:Response,next:NextFunction){
    //@ts-ignore
    req.name="Tom";
    next();
}

app.get("/api/books/:bookId/:authorId",middleware,[handleGetBookOne,handleGetBookTwo]);


app.listen(3000,()=>{
    console.log("Application listening at localhost:3000")
});