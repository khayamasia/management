"use strict";

/**
 * expense controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::expense.expense");

// "use strict";

// /**
//  * expense controller
//  */

// const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::expense.expense", ({ strapi }) => ({
//   // Override the find method
//   async find(ctx) {
//     // Get the authenticated user's ID

//     const userId = ctx.state.user.id;
//     // console.log("userId", userId);
//     const data = await strapi.db.query("api::expense.expense").findMany({
//       populate: {
//         category: true,
//         sub_category: true,
//       },
//       where: {
//         users_permissions_user: {
//           id: userId,
//         },
//       },
//     });
//     // const data = await strapi.db.query("api::expense.expense").findMany({
//     //   select: ["*"],
//     //   where: {
//     //     users_permissions_user: {
//     //       id: userId,
//     //     },
//     //   },
//     //   populate: {
//     //     category: true,
//     //     sub_category: true,
//     //   },
//     // });
//     // Return the response
//     console.log(data);
//     return { data };
//   },
// }));
