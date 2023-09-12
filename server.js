import express from "express";
import path  from "path";
import cors from "cors";
import session from "express-session"; 
import { fileURLToPath } from "url";   


// GlobalVariables
const app = express();
const PORT = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
app.use("/", (req, res) => {
     res.send("Hello World");
}); 

// Listen
app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Server is running on PORT:${PORT}`);
});
