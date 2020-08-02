// Import controller
const purchaseController = require("../controllers/purchase.controller");

// Exports routes to be called in server.js
module.exports = (app) => {
  app.post("/api/purchase/new", purchaseController.create);
  app.get("/api/purchase/", purchaseController.getAll);
  app.get("/api/purchase/:id", purchaseController.getOne);
  app.put("/api/purchase/update/:id", purchaseController.update);
  app.delete("/api/purchase/delete/:id", purchaseController.delete);
};

// Format:
// app.MONGOOSE_FUNCTION("ROUTE", CONTROLLER_FUNCTION)
