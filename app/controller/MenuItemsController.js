let MenuItemsModel = require("../model/MenuItemsModel");
let menuitems = require("../resources/menuitems.json");

let MenuItemsController = {

getMenuItems: async function (req, res) {
  let id = req.query.rid;
    id = id ? id : 0;
    try {
        let result = await MenuItemsModel.find({ restaurantId: id });
        res.status(200).send({
          status: true,
          menu_items: result,
        });
      } catch (err) {
        res.status(500).send({
          status: false,
          message: "Server Error",
          err,
        });
      }
    },

addMenuItems: async function (req, res) {
      try {
        let result = await MenuItemsModel.insertMany(menuitems);
        res.status(200).send({
          status: true,
          message: "Menu Items Added Successfully",
          result,
        });
      } catch (err) {
        res.status(500).send({
          status: false,
          message: "Server Error",
          err,
        });
      }
    },
};

module.exports = MenuItemsController;