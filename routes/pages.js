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
router.get("/blog", (req, res) => {
      context.viewtitle = "Blog";
      res.render("Screens/BlogScreen.ejs", context); 
});
router.get("/article", (req, res) => {
      context.viewtitle = "Article";
      res.render("Screens/ArticleScreen.ejs", context); 
});
router.get("/search", (req, res) => {
      context.viewtitle = "Result";
      res.render("Screens/BlogSearch.ejs", context); 
});


export const pagesRouter = router;