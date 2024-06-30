"use strict";

/**
 * category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::name.name", ({ strapi }) => ({
  getAll: async (ctx, next) => {
    const data = await strapi.entityService.findMany("api::name.name", {
      fields: ["id", "name"],
      sort: { createdAt: "desc" },
    });
    console.log(data);
    return {
      data,
    };
  },
}));
