const Purchase = require("../models/purchase.model");

module.exports = {
  // CREATE: Create one Purchase
  create(req, res) {
    Purchase.create(req.body)
      .then((category) => res.json(category))
      .catch((err) => res.status(400).json(err));
  },

  // READ: Get all Authors
  getAll(req, res) {
    console.log("hello i am alive");
    // Blank .find param gets all
    Purchase.find()
      .then((allCats) => res.json({ requests: allCats }))
      .catch((err) => res.status(400).json(err));
  },
  // READ: Get one Purchase by id
  getOne(req, res) {
    Purchase.findById({ _id: req.params.id })
      .then((category) => res.json(category))
      .catch((err) => res.status(400).json(err));
  },

  // UPDATE: Update one Purchase by id, re-running validators on any changed fields
  update(req, res) {
    Purchase.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
      .then((updatedCat) => res.json(updatedCat))
      .catch((err) => res.status(400).json(err));
  },

  // DESTROY: Delete one Purchase by id
  delete(req, res) {
    Purchase.findByIdAndDelete(req.params.id)
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
