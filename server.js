import express from "express";
import path  from "path";
import cors from "cors";
import session from "express-session";
import { pagesRouter } from "./routes/pages.js";

// GlobalVariables
const app = express();
const PORT = process.env.PORT || 8080;

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
app.get("/try", (req, res)=>{
   res.send("app is on");
});
app.use("/", pagesRouter);

app.listen(PORT, (err)=>{
    if(err) throw err;
    console.log(`Server is running on PORT:${PORT}`);
});
