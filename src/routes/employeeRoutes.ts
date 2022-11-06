import express from "express";
import {
  addEmployees,
  authEmployee,
  getEmployees,
  registerEmployee,
} from "../controllers/employeeController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/register").post(registerEmployee);
router.route("/login").post(authEmployee);
router.route("/home").get(protect, getEmployees).post(protect, addEmployees);

export default router;
