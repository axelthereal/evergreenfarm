import express from "express";
import path  from "path";
import cors from "cors";
import session from "express-session"; 
import { fileURLToPath } from "url"; 
import fs from 'fs';


// GlobalVariables
const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: "12@Hash2536blmven77$op9923pm40",
    cookie: { secure: false },
    resave: false,
    saveUninitialized: false
}));

// Routes 
app.get("/app", (req, res) => { 
const folderName = path.join(__dirname, "/app/dist");
try {
  if (fs.existsSync(folderName)) {
    res.send("File exist !!!");
  }else{
    res.send("File does not exist !!!");
  }
} catch (err) {
  console.error(err);
  res.send("Error occured !!!");
}
});
app.use("/", express.static(path.join(__dirname, "/app/dist")));
app.use("/home", express.static(path.join(__dirname, "/app/dist")));
app.use("/about", express.static(path.join(__dirname, "/app/dist")));


app.listen(PORT, (err)=>{
    if(err) throw err;
    console.log(`Server is running on PORT:${PORT}`);
});
