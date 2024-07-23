import { Router } from "express";

import { getWellness, getMeditation, getExercicios } from "../controllers/social_wellness.controller.js";

const tipsRouter = Router();

tipsRouter.get("/mental-wellness-tips", (req, res) => {
    const listTips = getWellness()
    res.status(200).json({listTips})
})


tipsRouter.get("/meditation-resources", (req, res) => {
    const listTips = getMeditation()
    res.status(200).json({listTips})
})


tipsRouter.get("/physical-activities", (req, res) => {
    const listTips = getExercicios()
    res.status(200).json({listTips})
})

export { tipsRouter };