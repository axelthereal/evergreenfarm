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
    res.render("Screens/HomeScreen.ejs", context); 
});
router.get("/discover", (req, res) => {
      context.viewtitle = "Our Mission";
      res.render("Screens/DiscoverScreen.ejs", context); 
  });


export const pagesRouter = router;