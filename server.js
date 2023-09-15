import express from "express";  
import session from "express-session";  
import { pagesRouter } from "./routes/pages.js";

// GlobalVariables
const app = express();
const PORT = process.env.PORT || 8080; 
let context = {
    viewtitle: ""
};

// View_Engine
app.set("view engine", "ejs");
app.use("/assets", express.static("./static"));

// Middlewares 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: "12@Hash2536blmven77$op9923pm40",
    cookie: { secure: false },
    resave: false,
    saveUninitialized: false
}));
 
// Routes  
app.get("/home", (req, res) => {
    context.viewtitle = "Home";
    res.render("screens/HomeScreen.ejs", context); 
});


// Listen
app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Server is running on PORT:${PORT}`);
});
