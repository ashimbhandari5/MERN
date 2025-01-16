import { Router } from "express";

const teacherRouter = Router();
teacherRouter
  .route("/") //localhost:8000/teacher
  .post((req, res, next) => {
    res.json("teacher created successfully");
  })
  .get((req, res, next) => {
    res.json("teacher read successfully");
  });

teacherRouter
  .route("/:id")
  .get((req, res, next) => {
    res.json("teacher read successfully");
  })
  .patch((req, res, next) => {
    res.json("teacher updated successfully");
  })
  .delete((req, res, next) => {
    res.json("teacher deleted successfully");
  });

export default teacherRouter;
