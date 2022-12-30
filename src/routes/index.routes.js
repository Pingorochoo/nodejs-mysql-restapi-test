import { Router } from "express";
import { getHome, getPing } from "../controllers/index.controller.js";
const router = Router()
router.get('/', getHome)
router.get('/ping', getPing)

export default router