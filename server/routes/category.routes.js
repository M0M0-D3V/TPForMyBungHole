// Import controller
const categoryController = require("../controllers/category.controller");

// Exports routes to be called in server.js
module.exports = (app) => {
  app.post("/api/category/", categoryController.create);
  app.get("/api/category/", categoryController.getAll);
  app.get("/api/category/:id", categoryController.getOne);
  app.put("/api/category/:id", categoryController.update);
  app.delete("/api/category/:id", categoryController.delete);
};

// Format:
// app.MONGOOSE_FUNCTION("ROUTE", CONTROLLER_FUNCTION)
