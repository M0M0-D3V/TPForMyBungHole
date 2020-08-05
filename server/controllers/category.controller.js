const Category = require("../models/category.model");

module.exports = {
  // CREATE: Create one Category
  create(req, res) {
    console.log("hello i am alive.. here i make the stuff");
    Category.create(req.body)
      .then((category) => res.json(category))
      .catch((err) => res.status(400).json(err));
  },

  // READ: Get all Authors
  getAll(req, res) {
    console.log("hello i am alive.. here i give you the stuffs");
    // Blank .find param gets all
    Category.find()
      .then((allCats) => res.json({ categories: allCats }))
      .catch((err) => res.status(400).json(err));
  },
  // READ: Get one Category by id
  getOne(req, res) {
    console.log("hello i am alive.. here i give you the one thing");
    Category.findById({ _id: req.params.id })
      .then((category) => res.json(category))
      .catch((err) => res.status(400).json(err));
  },

  // UPDATE nested Object list: find by ID and push into list
  // update(req, res) {
  //   console.log("hello i am alive.. here i update the one thing");
  //   Category.findById(req.params.id)
  //   .then((category) => {
  //     category.product.push(req.body.newProduct);

  //     category.save()
  //     .then(updatedCat) => {
  //       res.json(updatedCat);
  //     })
  //     .catch((err) => {res.json(err) });
  //   },)
  //   .catch((err) => {
  //     res.json(err);
  //   })
  // }

  // UPDATE: Update one Category by id, re-running validators on any changed fields
  update(req, res) {
    console.log("hello i am alive.. here i update the one thing");
    Category.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
      .then((category) => {
        console.log(category.product);
        category.product.push(req.body);
        category.save();
        console.log(category.product);
      })
      .then((updatedCat) => res.json(updatedCat))
      .catch((err) => res.status(400).json(err));
  },

  // DESTROY: Delete one Category by id
  delete(req, res) {
    console.log("hello i am alive.. here i delete the one thing");
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
