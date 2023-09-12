import express from "express";
import path  from "path";
import cors from "cors";
import session from "express-session";
import { pagesRouter } from "./routes/pages.js";
import path from "path";
import { fileURLToPath } from "url"; 


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
app.use("/", _static(path.join(__dirname, "/app/dist")));
//app.use("/", pagesRouter);

app.listen(PORT, (err)=>{
    if(err) throw err;
    console.log(`Server is running on PORT:${PORT}`);
});
