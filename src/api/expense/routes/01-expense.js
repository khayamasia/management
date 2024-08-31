module.exports = {
  routes: [
    {
      method: "GET",
      path: "/expense/getAll/:page/:pageSize",
      handler: "expense.getAll",
    },
  ],
};
