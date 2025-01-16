import { Router } from "express";

const homeRouter = Router();
homeRouter
  .route("/")
  .post((req, res, next) => {
    console.log("hello i will add data to database");
  })
  .get((req, res, next) => {
    console.log("hello i will give you a data");
  })
  .patch((req, res, next) => {
    console.log("hello i will update data in database");
  })
  .delete((req, res, next) => {
    console.log("hello i will delete data in database");
  });
export default homeRouter;
