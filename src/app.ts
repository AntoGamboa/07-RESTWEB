import { publicDecrypt } from "crypto";
import { Server } from "./presentation/server";
import { envs } from "./config/envs";


(() =>{

    main();
})();

function main(){

    //* Middelwares
    
    //* Public Folder


    const server = new Server({
        PORT:envs.PORT,
        PUBLIC_PATH:envs.PUBLIC_PATH
    });

    server.Start();
}