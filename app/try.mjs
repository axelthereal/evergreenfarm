import path, { dirname }  from "path";  
import { fileURLToPath } from "url"; 
import fs from 'fs';


function testPath() {
         let __dirname = path.dirname(fileURLToPath(import.meta.url));
         let npath = path.join(__dirname, "dist");
         try {
            if (fs.existsSync(npath)) {
              return "File exist !!!" + npath;
            }else{
                return "File does not exist !!!" + npath;
            }
          } catch (err) { 
            return "Error occured !!!" + npath;
          }
}


export default testPath;