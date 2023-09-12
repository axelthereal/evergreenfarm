import { static as _static, Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
const router = Router();

const __dirname = path.dirname(fileURLToPath(import.meta.url));


router.use("/", _static(path.join(__dirname, "../app/dist")));
router.use("/home", _static(path.join(__dirname, "../app/dist")));
router.use("/about", _static(path.join(__dirname, "../app/dist")));

export const pagesRouter = router;