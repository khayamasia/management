"use strict";

/**
 * expense controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::expense.expense", ({ strapi }) => ({
  getAll: async (ctx, next) => {
    const userId = ctx.state.user.id;

    // Retrieve pagination parameters from the query string, with defaults
    const { page = "1", pageSize = "10" } = ctx.params;
    // Convert page and pageSize to numbers
    const pageNumber = Number(page);
    const pageSizeNumber = Number(pageSize);

    // Calculate the offset index
    const offset = (pageNumber - 1) * pageSizeNumber;

    // Perform the query with pagination
    const [data, total] = await Promise.all([
      strapi.db.query("api::expense.expense").findMany({
        populate: {
          category: true,
          sub_category: true,
        },
        where: {
          users_permissions_user: {
            id: userId,
          },
        },
        offset: offset,
        limit: pageSizeNumber,
        orderBy: [{ createdAt: "desc" }],
      }),
      strapi.db.query("api::expense.expense").count({
        where: {
          users_permissions_user: {
            id: userId,
          },
        },
      }),
    ]);

    // Return the data along with pagination meta information
    return {
      data,
      meta: {
        pagination: {
          page: pageNumber,
          pageSize: pageSizeNumber,
          pageCount: Math.ceil(total / pageSizeNumber),
          total,
        },
      },
    };
  },
}));
