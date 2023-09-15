import { Router } from "express"; 

const router = Router();
let context = {
      viewtitle: ""
};


// Routes
router.get("/", (req, res)=>{
      res.redirect("/home"); 
});
router.get("/home", (req, res) => {
    context.viewtitle = "Home";
    res.render("screens/HomeScreen", context); 
});


export const pagesRouter = router;