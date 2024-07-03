import express from "express";  
const router = express.Router()
import * as usercontrollers from "../controllers/Usercontrollers";

router.get("/", usercontrollers.getAll)
router.post("/", usercontrollers.createuser)
router.get("/:id", usercontrollers.getbyid)
router.put("/:id", usercontrollers.updatebyid)
router.delete("/:id", usercontrollers.deletebyid)
export default router;

