// Import controller
const categoryController = require("../controllers/category.controller");

// Exports routes to be called in server.js
module.exports = (app) => {
  app.post("/api/category/new", categoryController.create);
  app.get("/api/category/", categoryController.getAll);
  app.get("/api/category/:id", categoryController.getOne);
  app.put("/api/category/update/:id", categoryController.update);
  app.delete("/api/category/delete/:id", categoryController.delete);
};

// Format:
// app.MONGOOSE_FUNCTION("ROUTE", CONTROLLER_FUNCTION)
