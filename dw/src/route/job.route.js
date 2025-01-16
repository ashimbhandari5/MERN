import { Router } from "express";

const jobRouter = Router();
jobRouter
  .route("/") //localhost:8000/job
  .post((req, res, next) => {
    res.json("job created successfully");
  })
  .get((req, res, next) => {
    res.json("job read successfully");
  })
  .patch((req, res, next) => {
    res.json("job updated successfully");
  })
  .delete((req, res, next) => {
    res.json("job deleted successfully");
  });
export default jobRouter;
