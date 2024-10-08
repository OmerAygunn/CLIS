import express from "express";
import * as pageContorller from "../controllers/pageContorller.js"

const router = express.Router();

router.route("/").get(pageContorller.getIndexPage)
router.route("/about").get(pageContorller.getAboutPage)

export default router;