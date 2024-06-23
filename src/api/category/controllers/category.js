"use strict";

/**
 * category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::category.category",
  ({ strapi }) => ({
    getAll: async (ctx, next) => {
      const data = await strapi.entityService.findMany(
        "api::category.category",
        {
          fields: ["id", "name"],
        }
      );
      console.log(data);
      // Return the data along with pagination meta information
      return {
        data,
      };
    },
  })
);
