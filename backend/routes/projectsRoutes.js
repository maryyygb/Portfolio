import express from "express";

import {
  getAllProjects,
  createNewProject,
  updateProject,
  getProject,
  deleteProject,
} from "../controllers/projectsController.js";

const router = express.Router();

router.get("/", getAllProjects);

router.post("/", createNewProject);

router.get("/:id", getProject);

router.put("/:id", updateProject);

router.delete("/:id", deleteProject);

export default router;
