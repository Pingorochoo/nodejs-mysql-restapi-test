import { Router } from "express";
import { getEmployees, creatEmployees, updateEmployees, deleteEmployees, getEmployeeByID,updatePatchEmployees } from "../controllers/employees.controller.js";
const router = Router()
router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployeeByID)
router.post('/employees', creatEmployees)
router.put('/employees/:id', updateEmployees)
router.patch('/employees/:id', updatePatchEmployees)
router.delete('/employees/:id', deleteEmployees)
export default router