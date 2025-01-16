import { Router } from "express";

const contactRouter = Router();
contactRouter
  .route("/") //localhost:8000/contact
  .post((req, res, next) => {
    res.json("contact created successfully");
  })
  .get((req, res, next) => {
    res.json("contact read successfully");
  })
  .patch((req, res, next) => {
    res.json("contact updated successfully");
  })
  .delete((req, res, next) => {
    res.json("contact deleted successfully");
  });

contactRouter
  .route("/kathmandu") //localhost:8000/contact/kathmandu
  .post((req, res, next) => {
    res.json("kathmandu created successfully");
  })

  .get((req, res, next) => {
    res.json("kathmandu read successfully");
  });

// dynamic route should be placed at last
contactRouter
  .route("/:id") //localhost:8000/contact/any
  .post((req, res, next) => {
    res.json("hello checking");
  });
export default contactRouter;
