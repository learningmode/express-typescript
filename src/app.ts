import express,{Request,Response} from 'express';

const app = express();

app.use(express.json());

//app.use(express.urlencoded({extended:true}));

app.get("/",(req:Request,res:Response)=>{
    return res.json({
        success:true,
        name:'TomDoesTech'
    });
});

app.post('/api/data',(req:Request,res:Response)=>{
    console.log(req.body);

    return  res.sendStatus(200)
})

app.all('/api/all',(req:Request,res:Response)=>{
    return res.sendStatus(200);
});

app.listen(3000,()=>{
    console.log("Application listening at localhost:3000")
});