const Category = require("../models/category.model");

module.exports = {
  // CREATE: Create one Category
  create(req, res) {
    Category.create(req.body)
      .then((category) => res.json(category))
      .catch((err) => res.status(400).json(err));
  },

  // READ: Get all Authors
  getAll(req, res) {
    console.log("hello i am alive");
    // Blank .find param gets all
    Category.find()
      .then((allCats) => res.json({ categories: allCats }))
      .catch((err) => res.status(400).json(err));
  },
  // READ: Get one Category by id
  getOne(req, res) {
    Category.findById({ _id: req.params.id })
      .then((category) => res.json(category))
      .catch((err) => res.status(400).json(err));
  },

  // UPDATE: Update one Category by id, re-running validators on any changed fields
  update(req, res) {
    Category.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
      .then((updatedCat) => res.json(updatedCat))
      .catch((err) => res.status(400).json(err));
  },

  // DESTROY: Delete one Category by id
  delete(req, res) {
    Category.findByIdAndDelete(req.params.id)
      .then((deletedCat) => res.json(deletedCat))
      .catch((err) => res.status(400).json(err));
  },
};

// Format:
// module.exports.FUNCTION_NAME = (req, res) => {
//   MODEL.MONGOOSE_FUNCTION(PARAMS)
//     .then(VAR => res.json({MODEL: VAR}))
//     .catch(err => res.json(err))
// }
