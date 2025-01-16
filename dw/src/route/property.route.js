import { Router } from "express";

const propertyRouter = Router();
propertyRouter
  .route("/") //localhost:8000/property
  .post((req, res, next) => {
    res.json("property created successfully");
  })
  .get((req, res, next) => {
    res.json("property read successfully");
  });

propertyRouter
  .route("/:id")
  .get((req, res, next) => {
    res.json("property read successfully");
  })
  .patch((req, res, next) => {
    res.json("property updated successfully");
  })
  .delete((req, res, next) => {
    res.json("property deleted successfully");
  });

export default propertyRouter;
