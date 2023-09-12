import express from "express";
import path  from "path";
import cors from "cors";
import session from "express-session"; 
import { fileURLToPath } from "url";  
import testPath from "./app/try.mjs";


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

// Serve static files from the 'dist' directory inside 'app'
app.use(express.static(path.join(__dirname, 'app', 'dist')));

// Routes 
app.get("/app", (req, res) => { 
    res.send(testPath());
});
//app.use("/", express.static(path.join(__dirname, "app/dist")));
/*app.use("/home", express.static(path.join(__dirname, "app/dist")));
app.use("/about", express.static(path.join(__dirname, "app/dist")));*/

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "app", "dist"));
});


app.listen(PORT, (err)=>{
    if(err) throw err;
    console.log(`Server is running on PORT:${PORT}`);
});
