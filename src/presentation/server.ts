import express from 'express';
import path from 'path';
import { envs } from '../config/envs';
interface option{
    PUBLIC_PATH:string;
    PORT:number|string;

        
}
export class Server{
    private app = express();
   
    public constructor(private readonly options:option)
    {}
    async Start(){
        

        this.app.use(express.static(this.options.PUBLIC_PATH))

        this.app.get( '*' , (req , res) =>{
           
            const index = path.join(__dirname + `../../../${this.options.PUBLIC_PATH}/index.html` )
            res.sendFile(index);
            return;

        })

        this.app.listen(this.options.PORT,()=>{
            console.log(`server running in port ${this.options.PORT}`)

        })

    }

}