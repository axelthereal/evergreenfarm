import path  from "path";  
import { fileURLToPath } from "url"; 
import fs from 'fs';


function testPath() {
         let __dirname = path.dirname(fileURLToPath(import.meta.url));
         try {
            if (fs.existsSync(__dirname)) {
              return "File exist !!!" + __dirname;
            }else{
                return "File exist !!!" + __dirname;
            }
          } catch (err) { 
            return "Error occured !!!" + __dirname;
          }
}


export default testPath;